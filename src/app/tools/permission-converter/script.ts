'use client';

declare global {
    interface Window {
        convertToYaml: () => void;
        copyToClipboard: () => void;
        loadSampleJson: () => void;
    }
}

import { processPermissions } from './converter';

// Add functions to window object
window.convertToYaml = function() {
    const inputElement = document.getElementById('inputJson') as HTMLTextAreaElement;
    const outputElement = document.getElementById('outputYaml') as HTMLTextAreaElement;
    const errorElement = document.getElementById('errorMessage') as HTMLDivElement;

    try {
        const jsonData = JSON.parse(inputElement.value);
        const processed = processPermissions(jsonData);

        let yamlOutput = 'permissions:\n';
        Object.entries(processed.permissions).forEach(([section, perms]) => {
            yamlOutput += `  ${section}\n`;
            Object.entries(perms).forEach(([perm, value]) => {
                yamlOutput += `  "${perm}": ""\n`;
            });
            yamlOutput += '\n';
        });

        outputElement.value = yamlOutput;
        errorElement.style.display = 'none';
    } catch (error: any) {
        errorElement.textContent = `Error: ${error.message}`;
        errorElement.style.display = 'block';
        outputElement.value = '';
    }
};

window.copyToClipboard = function() {
    const outputElement = document.getElementById('outputYaml') as HTMLTextAreaElement;
    outputElement.select();
    document.execCommand('copy');
};

window.loadSampleJson = function() {
    const sampleJson = {
        "groups": {
            "admin": {
                "nodes": [
                    {
                        "type": "permission",
                        "key": "grim.alerts.enable-on-join"
                    },
                    {
                        "type": "weight",
                        "key": "weight.100"
                    }
                ]
            }
        }
    };

    const inputElement = document.getElementById('inputJson') as HTMLTextAreaElement;
    inputElement.value = JSON.stringify(sampleJson, null, 2);
};