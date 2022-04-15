function clean(parm1) {
    const parm2 = parm1.replaceAll("<", "&lt"),
        parm3 = parm2.replaceAll(">", "&gt"),
        parm4 = parm3.replaceAll("≤", "&le"),
        parm5 = parm4.replaceAll("≥", "&ge");
    return parm5;
}
module.exports = clean;
