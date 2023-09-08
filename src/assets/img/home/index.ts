const modules = import.meta.glob('./*.png', { eager: true });

const modelChoose: { [name: string]: any } = {};

for (let key in modules) {
  let name = key.replace(/(\.\/|\.png)/g, '');
  console.log('name', name);
  modelChoose[name] = (modules[key] as any).default;
  console.log('icons[name]', modelChoose[name]);
}

export { modelChoose };
