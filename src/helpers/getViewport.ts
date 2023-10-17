export default function getViewport(){
    const vw = Math.max(document.documentElement.clientWidth || 0, 
                        window.innerWidth || 0);
    return vw;
};