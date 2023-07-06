const fs = require('fs');

export const EmbedCodeBlock = (filepath) => {
    const content = fs.readFileSync(filepath, 'utf-8');
    const ext = filepath.split('.').pop();
    return (
        <>
            <pre>
                <code className={`language-${ext}`}>{content}</code>
            </pre>
        </>
    );
};
