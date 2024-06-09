# Define paths
$sourcePath = "C:\Users\eric1\OneDrive\Desktop\code\Alexia_skill"
$destinationZip = "C:\Users\eric1\OneDrive\Desktop\code\Alexia_skill\skill-package.zip"

# Navigate to the source path
Set-Location -Path $sourcePath

# Compile TypeScript to JavaScript
Write-Output "Compiling TypeScript..."
tsc

# Check if node_modules exists
if (-Not (Test-Path -Path "$sourcePath\node_modules")) {
    Write-Output "Installing Node.js dependencies..."
    npm install
}

# Remove existing zip file if it exists
if (Test-Path -Path $destinationZip) {
    Remove-Item -Path $destinationZip -Force
}

# Compress the necessary files
Write-Output "Creating ZIP file..."
Compress-Archive -Path "$sourcePath\dist\*", "$sourcePath\package.json", "$sourcePath\node_modules\*" -DestinationPath $destinationZip

Write-Output "ZIP file created at $destinationZip"
