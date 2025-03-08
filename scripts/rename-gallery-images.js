/**
 * This script renames gallery images to more meaningful names.
 * Run with: node scripts/rename-gallery-images.js
 */

const fs = require('fs');
const path = require('path');

// Define the mapping of old filenames to new filenames
const fileMapping = {
  'IMG-20240807-WA0017.jpg': 'web-development-workshop.jpg',
  'IMG-20240807-WA0047.jpg': 'hackathon-winners.jpg',
  'IMG-20240807-WA0074.jpg': 'community-networking.jpg',
  'IMG-20240807-WA0045.jpg': 'javascript-workshop.jpg',
  'IMG-20240807-WA0098.jpg': 'hackathon-presentation.jpg',
  'IMG-20240807-WA0024.jpg': 'community-gathering.jpg',
  'IMG20240808090103.jpg': 'ui-ux-workshop.jpg',
  'IMG-20240807-WA0062.jpg': 'hackathon-collaboration.jpg',
  'IMG-20240807-WA0185.jpg': 'annual-meetup.jpg',
  'IMG-20240807-WA0223.jpg': 'fullstack-workshop.jpg',
  'IMG-20240807-WA0259.jpg': 'hackathon-finals.jpg',
  'IMG-20240807-WA0013.jpg': 'leadership-summit.jpg',
};

// Path to the gallery folder
const galleryPath = path.join(__dirname, '..', 'public', 'gallery');

// Function to rename files
async function renameFiles() {
  console.log('Starting gallery image renaming process...');
  
  // Check if gallery directory exists
  if (!fs.existsSync(galleryPath)) {
    console.error('Gallery directory not found:', galleryPath);
    return;
  }
  
  // Get list of files in the gallery directory
  const files = fs.readdirSync(galleryPath);
  
  // Track renamed files
  const renamedFiles = [];
  const skippedFiles = [];
  
  // Rename each file according to the mapping
  for (const oldName in fileMapping) {
    const newName = fileMapping[oldName];
    const oldPath = path.join(galleryPath, oldName);
    const newPath = path.join(galleryPath, newName);
    
    // Check if the old file exists
    if (fs.existsSync(oldPath)) {
      try {
        // Rename the file
        fs.renameSync(oldPath, newPath);
        renamedFiles.push({ oldName, newName });
        console.log(`Renamed: ${oldName} -> ${newName}`);
      } catch (error) {
        console.error(`Error renaming ${oldName}:`, error.message);
      }
    } else {
      skippedFiles.push(oldName);
    }
  }
  
  // Print summary
  console.log('\nRenaming Summary:');
  console.log(`Total files processed: ${Object.keys(fileMapping).length}`);
  console.log(`Successfully renamed: ${renamedFiles.length}`);
  console.log(`Skipped (not found): ${skippedFiles.length}`);
  
  if (renamedFiles.length > 0) {
    console.log('\nRemember to update your gallery.tsx component to use the new filenames:');
    renamedFiles.forEach(({ oldName, newName }) => {
      console.log(`Replace: ${oldName} with: ${newName}`);
    });
  }
}

// Run the rename function
renameFiles().catch(console.error); 