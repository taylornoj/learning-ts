/*
If we take the xample from deepTypes:

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

lets refactor:
*/

interface DirectoryTwo {
  addFile: (name: string) => void;
  config: Config;
}

interface DefaultConfig {
  encoding: string;
  permissions: string;
}

interface Config {
  default: DefaultConfig;
}

class DesktopDirectoryTwo implements DirectoryTwo {
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

const DesktopTwo = new DesktopDirectoryTwo();

console.log(DesktopTwo.config);
//  default: { encoding: 'utf-8', permissions: 'drw-rw-rw-' } }