// Get references to the file input and upload button
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');

// Array to store uploaded files
const uploadedFiles = [];

// Add an event listener to the upload button
uploadButton.addEventListener('click', () => {
  // Check if a file is selected
  if (fileInput.files.length > 0) {
    // Access the selected file
    const file = fileInput.files[0];

    // Create an object to store file information
    const fileInfo = {
      name: file.name,
      size: file.size,
      type: file.type,
      content: null // Placeholder for file content
    };

    // Read the file content using the FileReader API
    const reader = new FileReader();
    reader.onload = function(event) {
      fileInfo.content = event.target.result; // Store the file content
      displayUploadedFiles(); // Display the list of uploaded files
    };
    reader.readAsText(file); // Change to readAsDataURL for binary files

    // Add the file information to the array
    uploadedFiles.push(fileInfo);

    // Perform any necessary operations with the file, such as uploading it to a server
    console.log('File selected:', fileInfo);

    // Reset the file input
    fileInput.value = '';
  } else {
    // No file selected, display an error message or take appropriate action
    console.log('No file selected');
  }
});

// Function to display the list of uploaded files
function displayUploadedFiles() {
  const fileList = document.getElementById('fileList');
  fileList.innerHTML = '';

  uploadedFiles.forEach(fileInfo => {
    const listItem = document.createElement('li');
    listItem.textContent = fileInfo.name;

    // Create a container for displaying the file content
    const fileContentContainer = document.createElement('div');

    // Create a text element to display the file content
    const fileContentText = document.createElement('pre');
    fileContentText.textContent = fileInfo.content;

    fileContentContainer.appendChild(fileContentText);
    listItem.appendChild(fileContentContainer);
    fileList.appendChild(listItem);
  });
}
