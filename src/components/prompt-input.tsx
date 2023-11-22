import {useCallback} from "react";

export const redraw = {
    run:()=>{

    }
}
export function APIKeyInput() {

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            e.stopPropagation()
            e.currentTarget.blur()
        }
        console.log('draw')
        redraw.run();
    }, [])


    return (
        <div className={`your-own-api-key`}>
            <div className="your-own-api-key__inner">
                prompt:
                <input
                    id="prompt-input"
                    defaultValue='a sunset at a tropical beach with palm trees'
                    onKeyDown={handleKeyDown}
                    spellCheck={false}
                    autoCapitalize="off"
                />
            </div>
        </div>
    )
}