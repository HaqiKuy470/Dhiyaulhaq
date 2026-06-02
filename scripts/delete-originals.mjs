import { readdirSync, statSync, unlinkSync } from "fs";
import { join, extname } from "path";

const DIRS = ["public/Sertif", "public/Dokumentasi"];

function deleteDir(dir) {
  let files;
  try {
    files = readdirSync(dir);
  } catch {
    return;
  }

  for (const file of files) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      deleteDir(fullPath);
      continue;
    }

    const ext = extname(file).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

    unlinkSync(fullPath);
    console.log(`🗑️ Deleted: ${fullPath}`);
  }
}

for (const dir of DIRS) {
  deleteDir(dir);
}

console.log("\n✅ Semua PNG & JPG sudah dihapus!");