interface DirectoryOne {
  addFile: (name: string) => void;
  // Define a config type member here
  // (config: {default: {encoding: string; permissions: string; }})
  config: {
    default: {
      encoding: string;
      permissions: string;
    }
  }
}

class DesktopDirectoryOne implements DirectoryOne {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    }
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const DesktopOne = new DesktopDirectoryOne();

console.log(DesktopOne.config);
// { default: { encoding: 'utf-8', permissions: 'drw-rw-rw-' } }