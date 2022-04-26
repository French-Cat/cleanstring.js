export default function clean(a) {
    const b = a.replaceAll("<", "&lt"),
        c = b.replaceAll(">", "&gt"),
        d = c.replaceAll("≤", "&le"),
        e = d.replaceAll("≥", "&ge");
    return e;
}
