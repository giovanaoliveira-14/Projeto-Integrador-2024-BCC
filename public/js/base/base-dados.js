export var tabelaUmidadeTemperatura = {
    umidade: {
        '20-30': {
            temperatura: {
                '15-20': {'Rega': '5 dias', 'ProtecaoUV': 'Nao', 'Aviso': 'Condições climáticas favoráveis para o cultivo. Regue regularmente e mantenha o solo úmido.', 'Dica': 'Utilize técnicas de captação de água da chuva para irrigar seu jardim.'},
                '20-25': {'Rega': '5 dias', 'ProtecaoUV': 'Nao', 'Aviso': 'Boa oportunidade para o plantio. Aproveite as condições amenas para iniciar o cultivo.', 'Dica': 'Prepare o solo com composto orgânico para promover o crescimento saudável das plantas.'},
                '25-30': {'Rega': '3 dias', 'ProtecaoUV': 'Nao', 'Aviso': 'Ideal para plantações que requerem menos água. Monitore a umidade do solo e ajuste a rega conforme necessário.', 'Dica': 'Adicione matéria orgânica ao solo para melhorar sua capacidade de retenção de água.'}
            }
        },
        '30-40': {
            temperatura: {
                '15-20': {'Rega': '5 dias', 'ProtecaoUV': 'Nao', 'Aviso': 'Condições climáticas estáveis para o crescimento das plantas. Mantenha o solo bem drenado e evite o acúmulo de água.', 'Dica': 'Evite regar em excesso para não prejudicar o sistema radicular das plantas.'},
                '20-25': {'Rega': '5 dias', 'ProtecaoUV': 'Nao', 'Aviso': 'Boa oportunidade para o plantio. Aproveite as temperaturas amenas para semear novas culturas.', 'Dica': 'Faça rotação de culturas para controlar pragas e doenças.'},
                '25-30': {'Rega': '3 dias', 'ProtecaoUV': 'Nao', 'Aviso': 'Condições ideais para o cultivo de plantas de clima temperado. Mantenha o solo úmido e bem adubado.', 'Dica': 'Utilize cobertura morta para conservar a umidade do solo e controlar o crescimento de ervas daninhas.'},
                '30-35': {'Rega': '2 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Cuidado com a exposição prolongada ao sol. Proteja as plantas com sombreamento e regue regularmente.', 'Dica': 'Evite regar durante as horas mais quentes do dia para reduzir a evaporação da água.'}
            }
        },
        '40-50': {
            temperatura: {
                '20-25': {'Rega': '5 dias', 'ProtecaoUV': 'Nao', 'Aviso': 'Condições favoráveis para o cultivo de hortaliças e vegetais de clima temperado. Mantenha o solo úmido e bem drenado.', 'Dica': 'Aplique adubo orgânico rico em nutrientes essenciais para o desenvolvimento das plantas.'},
                '25-30': {'Rega': '3 dias', 'ProtecaoUV': 'Nao', 'Aviso': 'Boas condições para o crescimento das plantas. Monitore a umidade do solo e regue conforme necessário.', 'Dica': 'Utilize mulching para conservar a umidade do solo e reduzir a necessidade de rega.'},
                '30-35': {'Rega': '2 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Cuidado com a exposição ao sol forte. Proteja as plantas com sombreamento e regue regularmente.', 'Dica': 'Evite regar durante as horas mais quentes do dia para reduzir o estresse hídrico das plantas.'}
            }
        },
        '50-60': {
            temperatura: {
                '25-30': {'Rega': '7 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Atenção! A exposição prolongada ao sol pode causar danos às plantas. Proteja com sombreamento e regue regularmente.', 'Dica': 'Utilize mulching para conservar a umidade do solo e reduzir a necessidade de rega.'},
                '30- 35': {'Rega': '5 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Cuidado com o estresse hídrico das plantas. Mantenha o solo úmido e proteja do sol intenso.', 'Dica': 'Utilize técnicas de irrigação por gotejamento para fornecer água de forma eficiente.'}
            }
        },
        '60-70': {
            temperatura: {
                '25-30': {'Rega': '7 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Atenção! O calor excessivo pode prejudicar o desenvolvimento das plantas. Proteja do sol direto e mantenha o solo úmido.', 'Dica': 'Instale sistemas de sombreamento temporário para proteger as plantas durante as horas mais quentes do dia.'}
            }
        },
        '70-80': {
            temperatura: {
                '25-30': {'Rega': '7 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Atenção! Altas temperaturas podem causar estresse hídrico nas plantas. Proteja com sombreamento e regue regularmente.', 'Dica': 'Utilize cobertura morta para conservar a umidade do solo e proteger as raízes das plantas.'}
            }
        },
        '80-90': {
            temperatura: {
                '25-30': {'Rega': '10 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Cuidado com o calor intenso. Proteja as plantas do sol direto e regue regularmente para evitar o estresse hídrico.', 'Dica': 'Aumente a frequência de irrigação durante os períodos de calor intenso para manter as plantas saudáveis.'}
            }
        }
    }
};


export var tabelaUVChuva = {
    uv: {
        'Baixa': {
            chuva: {
                'Sem chuva': {'Rega': '5 dias', 'ProtecaoUV': 'Nao', 'Aviso': 'Condições climáticas favoráveis para o cultivo. Regue regularmente e mantenha o solo úmido.', 'Dica': 'Utilize técnicas de captação de água da chuva para irrigar seu jardim.'},
                'Moderada': {'Rega': '3 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Boa oportunidade para o plantio. Aproveite a chuva para preparar o solo e iniciar o cultivo.', 'Dica': 'Evite pisar no solo molhado para não compactá-lo.'},
                'Chuva Intensa': {'Rega': '2 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Chuvas intensas podem causar encharcamento do solo. Ajuste a rega e monitore o escoamento da água.', 'Dica': 'Verifique o escoamento da água para evitar alagamentos e erosão.'}
            },
        },
        'Moderada': {
            chuva: {
                'Sem chuva': {'Rega': '7 dias', 'ProtecaoUV': 'Nao', 'Aviso': 'Clima estável para o crescimento das plantas. Regue conforme necessário e monitore o desenvolvimento.', 'Dica': 'Instale um sistema de irrigação por gotejamento para economizar água e reduzir o desperdício.'},
                'Moderada': {'Rega': '5 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Condições favoráveis para o plantio. Prepare o solo e inicie o cultivo com cuidado.', 'Dica': 'Mantenha as plantas bem ventiladas para evitar o desenvolvimento de doenças fúngicas.'},
                'Chuva Intensa': {'Rega': '3 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Chuvas intensas podem encharcar o solo. Monitore o escoamento da água e evite o acúmulo em áreas baixas.', 'Dica': 'Utilize canteiros elevados ou drenagem adequada para evitar o encharcamento do solo.'}
            },
        },
        'Alta': {
            chuva: {
                'Sem chuva': {'Rega': '10 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Cuidado! A intensidade da luz UV pode ser prejudicial às plantas. Proteja com sombreamento e regue regularmente.', 'Dica': 'Aplique adubo orgânico para melhorar a estrutura do solo e aumentar sua capacidade de retenção de água.'},
                'Moderada': {'Rega': '7 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Condições climáticas favoráveis para o crescimento das plantas. Regue regularmente e monitore o desenvolvimento.', 'Dica': 'Fique atento ao aparecimento de pragas e doenças durante períodos chuvosos.'},
                'Chuva Intensa': {'Rega': '5 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Chuvas intensas podem causar erosão e encharcamento do solo. Monitore o escoamento da água e evite danos às plantas.', 'Dica': 'Utilize cobertura morta para proteger o solo e reduzir a erosão.'}
            },
        },
        // 'Muito Alta': {
        //     chuva: {
        //         'Sem chuva': {'Rega': '10 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Atenção! A exposição prolongada ao sol pode causar danos às plantas. Proteja com sombreamento e regue regularmente.', 'Dica': 'Utilize mulching para conservar a umidade do solo e reduzir a necessidade de rega.'},
        //         'Moderada': {'Rega': '7 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Condições climáticas desafiadoras. Mantenha as plantas bem hidratadas e protegidas do sol forte.', 'Dica': 'Aumente a frequência de adubação para suprir as necessidades nutricionais das plantas durante períodos de estresse.'},
        //         'Chuva Intensa': {'Rega': '5 dias', 'ProtecaoUV': 'Sim', 'Aviso': 'Chuvas intensas podem causar alagamentos e danos às plantas. Mantenha a drenagem adequada e monitore o crescimento das plantas.', 'Dica': 'Remova o excesso de água dos pratos das plantas para evitar o apodrecimento das raízes.'}
        //     },
        // }
    }
};
