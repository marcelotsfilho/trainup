import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import AdditionalData from '@/src/components/AdditionalData';
import ProfileHeader from '@/src/components/ProfileHeader';
import RegistrationData from '@/src/components/RegistrationData';
import Training from '@/src/components/Training';

import dados from '../../data/perfilAluno.json';

export default function Profile() {
    const [perfil, setPerfil] = useState([] as unknown as typeof dados);

    useEffect(() => {
        setPerfil(dados);
    }, [dados]);

    //Se o perfil ainda não foi carregado ou se ele é um objeto/array vazio, renderiza uma tela em branco. 
    if(!perfil || Object.keys(perfil).length === 0) {
        return null;
    }
    return (
        <View className="flex-1 bg-gray-100">
            <ProfileHeader
            //Se o perfil?.perfilHeader?.nome falhar e retornar null ou undefined, garante que o
            //componente receba uma string vazia '' no lugar. 
                title={perfil?.perfilHeader?.nome || ''}
                matricula={perfil?.perfilHeader?.matricula || ''}
            />
            <View className="flex-1">
                <ScrollView>
                    <View className="pt-16 px-0 mt-4 items-center">
                        <RegistrationData
                            title='Dados Cadastrais'
                            cpf={perfil.dadosCadastrais.cpf}
                            dataNascimento={perfil.dadosCadastrais.dataNascimento}
                        />
                        <View className="mt-4">
                            <AdditionalData
                                title='Dados Adicionais'
                                celular={perfil.dadosAdicionais.celular}
                                endereco={perfil.dadosAdicionais.endereco}
                                bairro={perfil.dadosAdicionais.bairro}
                                cidade={perfil.dadosAdicionais.cidade}
                                estado={perfil.dadosAdicionais.estado}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View className="absolute top-0 w-full items-center">
                    <View className="-mt-[255px] left-[26%] absolute">
                        <Training
                            percentual={perfil.estatisticas.percentual}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}