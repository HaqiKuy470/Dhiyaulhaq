import sharp from "sharp";
import { readdirSync, statSync, renameSync } from "fs";
import { join, extname, basename } from "path";

const DIRS = ["public/Sertif", "public/Dokumentasi"];

async function convertDir(dir) {
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
            await convertDir(fullPath); // rekursif ke subfolder
            continue;
        }

        const ext = extname(file).toLowerCase();
        if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

        const outPath = join(dir, basename(file, ext) + ".webp");

        await sharp(fullPath)
            .webp({ quality: 85 })
            .toFile(outPath);

        console.log(`✅ ${fullPath} → ${outPath}`);
    }
}

for (const dir of DIRS) {
    await convertDir(dir);
}

console.log("\n🎉 Semua file sudah dikonversi ke WebP!");