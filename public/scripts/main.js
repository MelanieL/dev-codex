import { links } from './links.js';

// Get all tags being used from link.js
const allTags = links.map(link => link.tags);

// Combine tags array of arrays
const filteredTags = allTags.flat();

// Remove duplicates from tags array by converting to a Set and then back to an array
const condensedTags = [...new Set(filteredTags)];

// Sort tags alphabetically
const alphaTags = condensedTags.sort();
console.log(alphaTags);


// Pseudocode:
// 1 - Iterate over links array to get the tags (Done)
// 2 - Populate new array of tags used (Done)
// 3 - Order tags alphabetically (Done)
// 4 - Use tags array to populate empty HTML sections
// 5 - Filter over links for each section, creating a new array of only links with that sections tag
// 6 - Populate link cards for each section