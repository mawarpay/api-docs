import {spawn} from 'node:child_process';
import path from 'node:path';

const EN_PORT = '3001';
const ID_PORT = '3002';

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

console.log('\n  English:    http://127.0.0.1:' + EN_PORT + '/docs');
console.log('  Indonesian: http://127.0.0.1:' + EN_PORT + '/id/docs\n');

run([
  'start',
  '--port',
  EN_PORT,
  '--host',
  '127.0.0.1',
  '--no-open',
]);
run(
  [
    'start',
    '--locale',
    'id',
    '--port',
    ID_PORT,
    '--host',
    '127.0.0.1',
    '--no-open',
  ],
  {DOCUSAURUS_GENERATED_FILES_DIR_NAME: '.docusaurus-id'},
);
