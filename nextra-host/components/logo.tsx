import { assetPrefix } from '../config/constants';

export function Logo() {
    return (
        <>
            <img
                src={`${assetPrefix}/favicon/favicon-16x16.png`}
                style={{ marginBottom: 2 }}
            />
            <span style={{ marginLeft: 8 }}>
                {/* gradient text: https://www.jianshu.com/p/3a5bbfbf5957 */}
                <b
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, #cb3f49, purple)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    LK CS Book
                </b>
            </span>
        </>
    );
}
