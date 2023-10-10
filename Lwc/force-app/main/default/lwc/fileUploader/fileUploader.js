// fileUploader.js
import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class FileUploader extends LightningElement {
    @api recordId; // If you want to associate files with a specific record
    @track fileList = [];
    acceptedFormats = ['.jpg', '.jpeg', '.png', '.pdf']; // Define the allowed file formats

    columns = [
        { label: 'File Name', fieldName: 'title', type: 'text' },
        { label: 'File Type', fieldName: 'type', type: 'text' },
        { label: 'File Size (KB)', fieldName: 'size', type: 'number' },
    ];

    handleUploadFinished(event) {
        const uploadedFiles = event.detail.files;
        let newFiles = [];

        // Process the uploaded files
        uploadedFiles.forEach(file => {
            newFiles.push({
                id: file.documentId,
                title: file.name,
                type: file.type,
                size: (file.size / 1024).toFixed(2), // Convert size to KB and round to 2 decimal places
            });
        });

        // Update the file list
        this.fileList = [...this.fileList, ...newFiles];

        // Show a success message
        this.showToast('Success', 'Files uploaded successfully.', 'success');
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(event);
    }
}
