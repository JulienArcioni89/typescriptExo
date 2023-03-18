
export function subtract(a: number, b: number) {
	return a - b;
}


export function prop(obj: { [x: string]: any; }, propName: string | number) {
	return obj[propName];
}

/**
* 
* @param {Array} input un tableau de donnée
* @param {Function} fn une fonction de traitement qui prend en paramètre un tableau de donnée
* @return {Array} un tableau de donnée filtré du même type que le tableau d'entrée
*/
export function filter(fn: (arg0: any) => any, input: any) {
	return fn(input);
}

/**
 * Créé class et interface necessaire a rendre le code suivant valide
 */

interface IDownloadProduct {
	  name: string;
	  price: number;
	  file: string;

	  download(): void;
}

interface IShipableProduct {
	  name: string;
	  price: number;
	  weight: number;

	  ship(): void;
}

class DownloadProduct {
	  constructor(product: IDownloadProduct) {
	  }
}

class ShipableProduct {
	  constructor(product: IShipableProduct) {
	  }
}


function isDownloadProduct(arg: IDownloadProduct | IShipableProduct): arg is IDownloadProduct {
  return (arg as IDownloadProduct).file !== undefined;
}

function productFactory(product: IDownloadProduct | IShipableProduct) {
	if (isDownloadProduct(product)) {
		new DownloadProduct(product)
	} else {
		new ShipableProduct(product)
	}
}