import React from "react";
import { WebView } from "react-native-webview";

const MyWebView = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            html, body {
                height: 100%;
                margin: 0;
                padding: 0;
                font-family: 'Pregular', sans-serif; /* Ensure Pregular is loaded */
            }
            .container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between; /* Space between items */
                text-align: justify;           /* Justifies the text */
                flex: 1;                       /* Fill the available space */
                padding: 16px;                /* Optional padding */
            }
        </style>
        <title>WebView Example</title>
    </head>
    <body>
        <div class="container">
            <p>Your text content goes here. It will be justified and styled according to the specifications.</p>
        </div>
    </body>
    </html>
    `;

  return (
    <WebView
      originWhitelist={["*"]}
      source={{ html: htmlContent }}
      style={{ flex: 1 }} // Ensures WebView takes full height and width
    />
  );
};

export default MyWebView;
