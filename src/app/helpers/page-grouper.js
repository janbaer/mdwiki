export default function groupPages(pages) {
  return pages.reduce((groups, page) => {
    const currentGroup = groups.length > 0 ? groups[groups.length - 1] : undefined;
    const firstLetter = page.name.substr(0, 1).toUpperCase();

    if (!currentGroup || currentGroup.letter !== firstLetter) {
      groups.push({ letter: firstLetter, pages: [page] });
    } else {
      currentGroup.pages.push(page);
    }
    return groups;
  }, []);
}
