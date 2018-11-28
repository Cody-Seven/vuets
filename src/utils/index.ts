export function getParams(url: string): object {
  const params: any = url.split('?')[1].split('&');
  const temp: any[] = [];
  params.forEach((v: string): void => {
    const name: any = v.split('=')[0];
    const param: any = decodeURIComponent(v.split('=')[1]);
    temp[name] = param;
  });
  return temp;
}
