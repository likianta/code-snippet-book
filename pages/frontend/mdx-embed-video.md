# Embed Video Tag in MDX

> - https://nextra.site/docs/guide/markdown#mdx
> - https://codepen.io/hetgelaat/pen/dVjZWE

## Component

```jsx filename="embed-video.jsx"
export function EmbedVideo({ url }) {
    return (
        <div style={{
            borderRadius: '0.75rem',
            diplay: 'inline-block',
            overflow: 'hidden',
            position: 'relative',
            width: 'fit-content',
        }}>
            <video
                src={url}
                controls
                style={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 1,
                    position: 'relative',
                }}
            >
            </video>
        </div>
    );
}
```

## Use

```mdx
import { EmbedVideo } from 'embed-video.jsx'

<EmbedVideo url='/media/172846.mp4'>
</EmbedVideo>
```

## Screenshot

...
