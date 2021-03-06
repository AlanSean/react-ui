/**
 * 获取window滚动条位置
 */
var supportPageOffset = window.pageYOffset !== undefined;
var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
export function scrollTop() {
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
};
export function scrollLeft() {
    return supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
};
/**
 * 控制Y 滚动条的位置
 * @param { Obj }  scroll.top 滚动的位置
 * @param { Obj }  scroll.behavior smooth 平滑 暂时还没实现
 */
export function scrollTotop(scroll:any) {
    if (scroll !== undefined) {
        if (scrollTop() == (scroll.top || scroll)) {
            return;
        }
        if (window.scrollTo) {
            window.scrollTo(0, scroll.top || scroll);
        } else if (document.documentElement.scrollTop) {
            document.documentElement.scrollTop = scroll.top || scroll;
        } else if (document.body.scrollTop) {
            document.body.scrollTop = scroll.top || scroll;
        }
    }
}