import {spawn} from 'node:child_process';
import path from 'node:path';

const docusaurus = path.join(
  process.cwd(),
  'node_modules/@docusaurus/core/bin/docusaurus.mjs',
);

const children = [];

function run(args, extraEnv = {}) {
  const child = spawn(process.execPath, [docusaurus, ...args], {
    stdio: 'inherit',
    env: {...process.env, ...extraEnv},
  });
  children.push(child);
  child.on('exit', (code) => {
    if (code && code !== 0) {
      shutdown(code);
    }
  });
}

function shutdown(code = 0) {
  for (const child of children) {
    child.kill('SIGTERM');
  }
  process.exit(code);
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

run(
  ['start', '--locale', 'id', '--port', '3001', '--host', '127.0.0.1', '--no-open'],
  {DOCUSAURUS_GENERATED_FILES_DIR_NAME: '.docusaurus-id'},
);
run(['start', '--port', '3000']);
