#!/usr/bin/env node
/**
 * 自动扫描 public/assets/bg 目录下的图片，更新壁纸配置文件
 * 使用方法: node scripts/update-wallpapers.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BG_DIR = path.join(__dirname, '../src/.vuepress/public/assets/bg');
const CONFIG_FILE = path.join(__dirname, '../src/.vuepress/components/wallpapers.json');

function updateWallpapers() {
  // 读取目录下的所有图片文件
  const files = fs.readdirSync(BG_DIR)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) => {
      // default 排在最前面，其他按文件名排序
      if (a === 'default.jpg') return -1;
      if (b === 'default.jpg') return 1;
      return a.localeCompare(b, undefined, { numeric: true });
    });

  // 生成壁纸配置
  const wallpapers = files.map(file => {
    const id = file.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const name = id === 'default' ? '默认主题' : `风景 ${id}`;
    return { id, name, file };
  });

  // 写入配置文件
  const config = { wallpapers };
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2) + '\n');

  console.log(`✅ 已更新壁纸配置，共 ${wallpapers.length} 张壁纸:`);
  wallpapers.forEach(wp => {
    console.log(`  - ${wp.name} (${wp.file})`);
  });
}

updateWallpapers();
