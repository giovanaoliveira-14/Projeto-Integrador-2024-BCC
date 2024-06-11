var tabelaUmidadeTemperatura = {
    umidade: {
        '20-30': {
            temperatura: {
                '15-20': {'Rega': '5 dias', 'ProtecaoUV': 'Nao'},
                '20-25': {'Rega': '5 dias', 'ProtecaoUV': 'Nao'},
                '25-30': {'Rega': '3 dias', 'ProtecaoUV': 'Nao'}
            }
        },
        '30-40': {
            temperatura: {
                '15-20': {'Rega': '5 dias', 'ProtecaoUV': 'Nao'},
                '20-25': {'Rega': '5 dias', 'ProtecaoUV': 'Nao'},
                '25-30': {'Rega': '3 dias', 'ProtecaoUV': 'Nao'},
                '30-35': {'Rega': '2 dias', 'ProtecaoUV': 'Sim'}
            }
        },
        '40-50': {
            temperatura: {
                '20-25': {'Rega': '5 dias', 'ProtecaoUV': 'Nao'},
                '25-30': {'Rega': '3 dias', 'ProtecaoUV': 'Nao'},
                '30-35': {'Rega': '2 dias', 'ProtecaoUV': 'Sim'}
            }
        },
        '50-60': {
            temperatura: {
                '25-30': {'Rega': '7 dias', 'ProtecaoUV': 'Sim'},
                '30-35': {'Rega': '5 dias', 'ProtecaoUV': 'Sim'}
            }
        },
        '60-70': {
            temperatura: {
                '25-30': {'Rega': '7 dias', 'ProtecaoUV': 'Sim'}
            }
        },
        '70-80': {
            temperatura: {
                '25-30': {'Rega': '7 dias', 'ProtecaoUV': 'Sim'}
            }
        },
        '80-90': {
            temperatura: {
                '25-30': {'Rega': '10 dias', 'ProtecaoUV': 'Sim'}
            }
        }
    }
};

console.log(tabelaUmidadeTemperatura);

var tabelaUVChuva = {
    uv: {
        'Baixo': {
            chuva: {
                'Pouca (0-5 mm)': {'Rega': '5 dias', 'ProtecaoUV': 'Nao'},
                'Moderada (5-10 mm)': {'Rega': '3 dias', 'ProtecaoUV': 'Sim'},
                'Intensa (acima de 10 mm)': {'Rega': '2 dias', 'ProtecaoUV': 'Sim'}
            },
        },
        'Moderado': {
            chuva: {
                'Pouca (0-5 mm)': {'Rega': '7 dias', 'ProtecaoUV': 'Nao'},
                'Moderada (5-10 mm)': {'Rega': '5 dias', 'ProtecaoUV': 'Sim'},
                'Intensa (acima de 10 mm)': {'Rega': '3 dias', 'ProtecaoUV': 'Sim'}
            },
        },
        'Alto': {
            chuva: {
                'Pouca (0-5 mm)': {'Rega': '10 dias', 'ProtecaoUV': 'Sim'},
                'Moderada (5-10 mm)': {'Rega': '7 dias', 'ProtecaoUV': 'Sim'},
                'Intensa (acima de 10 mm)': {'Rega': '5 dias', 'ProtecaoUV': 'Sim'}
            },
        },
        'Muito Alto': {
            chuva: {
                'Pouca (0-5 mm)': {'Rega': '10 dias', 'ProtecaoUV': 'Sim'},
                'Moderada (5-10 mm)': {'Rega': '7 dias', 'ProtecaoUV': 'Sim'},
                'Intensa (acima de 10 mm)': {'Rega': '5 dias', 'ProtecaoUV': 'Sim'}
            },
        }
    }
};

console.log(tabelaUVChuva);

