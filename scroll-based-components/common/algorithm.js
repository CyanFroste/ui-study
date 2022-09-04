// https://www.geeksforgeeks.org/find-two-rectangles-overlap/
export function overlaps({ firstTopLeft, firstBottomRight }, { secondTopLeft, secondBottomRight }, margin = 0) {
    // the line cannot have positive overlap
    if (
        firstTopLeft.x - margin === firstBottomRight.x + margin ||
        firstTopLeft.y - margin === firstBottomRight.y + margin ||
        secondTopLeft.x - margin === secondBottomRight.x + margin ||
        secondTopLeft.y - margin === secondBottomRight.y + margin
    )
        return false
    // If one rectangle is on left side of other
    if (
        firstTopLeft.x - margin >= secondBottomRight.x + margin ||
        secondTopLeft.x - margin >= firstBottomRight.x + margin
    )
        return false
    // If one rectangle is above other
    if (
        firstTopLeft.y - margin >= secondBottomRight.y + margin ||
        secondTopLeft.y - margin >= firstBottomRight.y + margin
    )
        return false
    return true
}

