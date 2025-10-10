import fs from 'fs';
import path from 'path';

const src = path.resolve('src/immages');
const dest = path.resolve('dist/immages');

try {
  fs.rmSync(dest, { recursive: true, force: true });
  fs.cpSync(src, dest, { recursive: true });
  console.log('public -> dist/public copiato');
} catch (err) {
  console.error('Errore durante la copia:', err);
  process.exit(1);
}
