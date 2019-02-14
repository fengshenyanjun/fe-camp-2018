
function removeClass(Weeks,Day,Class){
    if(s2 >= Weeks){
        let bridge = dayNum[Day].getElementsByTagName("ul");
        let classNum = bridge[0].getElementsByTagName("li");
        let flag = classNum[Class].getElementsByTagName('a');
        let one = flag[0];
        one.innerHTML = " ";
        let cd = classNum[Class].getElementsByTagName("ul");
        cd[0].style.display = "none";
    }
}
/* 遇到的问题：getEementsByTagName()获取到的子元素，包含子元素中的含有该标签的元素
            当追踪第几节课时，由于"level-1" ul 里 li 内又有 ul 的 li，导致追踪不能符合用户所想节数
            索性把没有文字的 li 处也加上"level-2" ul 及里面的 li ，
            这样用户想要的第 n 节课，在js中写成 2*(n-1) 节课就好
*/

removeClass(11,0,0);                                                 /* 从11周开始周1第1节课清除 */
removeClass(11,0,2);
removeClass(11,0,6);
removeClass(14,0,8);

removeClass(16,1,0);
removeClass(5,1,2);
removeClass(15,1,8);
removeClass(14,1,12);

removeClass(11,2,0);
removeClass(11,2,2);
removeClass(11,2,6);
removeClass(14,2,12);

removeClass(15,3,0);
removeClass(5,3,2);
removeClass(11,3,12);

removeClass(17,4,6);
removeClass(5,4,12);