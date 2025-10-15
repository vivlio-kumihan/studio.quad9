import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

export async function GET() {
  const galleryPath = path.join(process.cwd(), 'public/images/gallery');
  const csvPath = path.join(galleryPath, 'meta-data.csv');
  console.log(csvPath);
  
  let metaDataMap = {};
  
  if (fs.existsSync(csvPath)) {
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const csvData = Papa.parse(csvContent, {
      header: true,
      skipEmptyLines: true
    });
    
    metaDataMap = csvData.data.reduce((acc, item) => {
      acc[item.file.trim()] = item.fileName && { 
        caption: item.caption?.trim || "", 
        location: item.location?.trim || "", 
      }
      return acc;
    }, {});
  }
  
  const files = fs.readdirSync(galleryPath)
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .sort();
  
  const photoData = files.map((filename, index) => {
    const nameWithoutExt = filename.replace(/\.[^.]+$/, '');
    const date = nameWithoutExt.match(/^(\d{2})(\d{2})(\d{2})/)
      ? `${dateMatch[1]}/${dateMatch[2]}/${dateMatch[3]}`
      : null;
    
    const metadata = metaDataMap[filename] || {};
    
    return {
      id: nameWithoutExt,
      filename: filename,
      src: `/images/gallery/${filename}`,
      date: date,
      caption: metadata.caption || `撮影作品 #${index + 1}`,
      location: metadata.location || '撮影地未明'
    };
  });
  
  return Response.json(photoData);
}


// if (item.fileName) {
//   acc[item.fileName.trim()] = {
//     caption: item.caption?.trim() || '',
//     location: item.location?.trim() || ''
//   };
// }