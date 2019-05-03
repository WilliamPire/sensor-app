export class Consolidado {
    regiao: string;
    total: number;
    totalizadorSensores: TotalizadorSensores[];
}

export class TotalizadorSensores {
    sensor: string;
    total: number;
}