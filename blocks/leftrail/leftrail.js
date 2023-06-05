export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    //retrieve title
    const title = row.firstElementChild.textContent;
    //remove title div
    row.firstElementChild.remove();
    const link = row.firstElementChild.getElementsByTagName('a')[0];
    if (link && link.tagName === 'A' && link.href) {
        link.innerHTML = title;
        ul.append(row);
    }
  });
  block.textContent = 'Resources';
  block.append(ul);
}
