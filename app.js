/**
 * Created by: Ruben Encarnacion
 * Presidency of Dominican Republic
 * Date: 01/march/2021
 * https://presidencia.gob.do
 */
new Vue({
    el: '#app',
    data: {
        provinceSelected: [],
        municitySelected: [],
        provinces: [
            {
                name: "GRAN SANTO DOMINGO", municity: [
                    {
                        name: "DAS1", center: [
                            {name: "INTEGRAL II"},
                            {name: "AREA I DE SALUD"},
                            {name: "CPN DE LOS FRAILES III"},
                            {name: "HOSPITAL DE BOCA CHICA"}
                        ]
                    },
                    {name: "ALMIRANTE DAS I", center: [{name: "HOSPITAL DEL ALMIRANTE"}]},
                    {name: "SAN LUISS DAS I", center: [{name: "CENTRO DIAGNOSTICO SAN LUIS"}]},
                    {name: "LOS FRAILES DAS I", center: [{name: "CPN LOS FRAILES"}]},
                    {name: "GUERRA DAS I", center: [{name: "HOSPITAL DE GUERRA"}]},
                    {
                        name: "DAS II", center: [
                            {name: "MULTIUSO URBANIZACION HAMARAP"},
                            {name: "DISPENSARIO MEDICO SANTA MARIA REINA"},
                            {name: "POLICLINICO ZONA E"},
                            {name: "JUZGADO DE PAZ DE LA 4TA CIRC"},
                            {name: "CLUB EL ROSAL"},
                            {name: "DISPENSARIO MEDICO SANTA MONICA"},
                            {name: "CLUB CALERO"},
                            {name: "MONTE DE PIEDAD"},
                            {name: "ESTACION BOMBEROS CIVILES NO.2"},
                            {name: "ESCUELA PRIMARIA E INT. PROFESOR DGO. MORENO JIMENEZ"},
                            {name: "CLUB PLAN SOCIAL DE LOS BILLETEROS"},
                            {name: "CENTRO EDUCATIVO VIRGEN DE LA ALTAGRACIA"},
                            {name: "AYUNTAMIENTO SANTO DOMINGO ESTE"},
                            {name: "HOSPITAL MATERNO INFANTIL SAN LORENZO DE LOS MINA"},
                            {name: "HOSPITAL DR DARIO CONTRERAS"},
                            {name: "ESCUELA RAFAEL DE LA ROSA HERNANDEZ"},
                            {name: "COMEDOR ECONOMICO"},
                            {name: "MULTIUSO ISABELITA"},
                            {name: "ALDEAS SOS"},
                            {name: "CPN LA ISABELITA"},
                            {name: "CPN SAN JOSE BARQUITA"},
                            {name: "EL DIQUE"},
                            {name: "LOS MAMEYES"},
                            {name: "CPNA LOS TRES BRAZOS"},
                            {name: "HOSPITAL MUNICIPAL RALMA"},
                            {name: "CPN VIETNAM"},
                            {name: "HOSPITAL MUNICIPAL VILLA DUARTE"}
                        ]
                    },
                    {
                        name: "DAS III", center: [
                            {name: "HOSPITAL NEY ARIAS LORA"},
                            {name: "HOSPITAL REINALDO ALMANZAR"},
                            {name: "HOSPITAL HUGO MENDOZA"},
                            {name: "MULTI USO SABANA PERDIDA"}
                        ]
                    },
                    {name: "GUARICANO (DAS III)", center: [{name: "BIBLIOTECA MULTIUSO GUARICANO CENTRO"}]},
                    {name: "VISTA BELLA (DAS III)", center: [{name: "CLUB LOS MOSQUITOS"}]},
                    {
                        name: "LA VICTORIA (DAS III)",
                        center: [{name: "MULTIUSO LA VICTORIA / IGLESIA PARQUE LA VICTORIA"}]
                    },
                    {name: "NUEVA BARQUITA (DAS III)", center: [{name: "CENTRO DIAGNOSTICO NUEVA BARQUITA"}]},
                    {name: "CAPOTILLO DAS IV", center: [{name: "CPN VALENTIN BOTEN"}]},
                    {name: "CRISTO REY DAS IV", center: [{name: "FUNDACION CRUZ JIMINIAN"}]},
                    {name: "ENS. CAPOTILLO DAS IV", center: [{name: "FUNDACION JUDEGU"}]},
                    {name: "DAS IV", center: [{name: "SOCIEDAD BENEFICA PRO-EMIGRANTES ESPAÑOLES"}]},
                    {name: "DAS IV", center: [{name: "ASILO LA BENDICION DE DIOS"}]},
                    {name: "LA ZURZA ( DAS IV)", center: [{name: "FUNDSAZURZA"}]},
                    {name: "CAPOTILLO   ( DAS IV)", center: [{name: "FUNDACIÓN ESCOBA"}]},
                    {name: "VILLA JUANA   ( DAS IV)", center: [{name: "CLUB MAURICIO BÁEZ"}]},
                    {name: "VILLA CONSUELO  ( DAS IV)", center: [{name: "CLUB RAFAEL BARÍAS"}]},
                    {name: "VILLA CONSUELO  ( DAS IV)", center: [{name: "HOSPITAL DR. FÉLIX MARÍA GOICO"}]},
                    {name: "SIMÓN BOLÍVAR  ( DAS IV)", center: [{name: "POLITÉCNICO NUESTRA SRA. DEL CARMEN"}]},
                    {name: "GUALEY  ( DAS IV)", center: [{name: "ESCUELA FÁTIMA OSCAR SANTANA"}]},
                    {name: "DOMINGO SAVIO  ( DAS IV)", center: [{name: "CONSULTORIO MÉDICO LA CIÉNAGA"}]},
                    {name: "MARÍA AUXILIADORA  ( DAS IV)", center: [{name: "CLUB MARÍA AUXILIADORA"}]},
                    {name: "MEJORAMIENTO SOCIAL (DAS IV)", center: [{name: "DISPENSARIO PARROQUIAL SAN GABRIEL"}]},
                    {
                        name: "LOS PRADOS (DAS V)", center: [
                            {name: "PARROQUIA NUESTRA SEÑORA DEL SAGRADO CORAZON"},
                            {name: "CLUB LOS PRADOS"}
                        ]
                    },
                    {name: "HONDURAS (DAS V)", center: [{name: "CENTRO MEDICO HONDURA"}]},
                    {
                        name: "ZONA UNIVERSITARIA (DAS V)", center: [
                            {name: "UNIVERSIDAD AUTONOMA DE SANTO DOMINGO (UASD)"},
                            {name: "UASD - CONSULTORIO TEJADA FLORENTINO"}
                        ]
                    },
                    {name: "ENS. LA JULIA (DAS V)", center: [{name: "PONTIFICIA UNIVERSIDAD CATOLICA MADRE Y MAESTRA  (PUCMM)"}]},
                    {name: "SAN CARLOS (DAS V)", center: [{name: "CLUB SAN CARLOS"}]},
                    {name: "URB. REAL (DAS V)", center: [{name: "CLUB PLAZA INDEPENDENCIA"}]},
                    {
                        name: "ENS. NACO (DAS V)", center: [
                            {name: "CLUB NACO"},
                            {name: "CENTRO OLIMPICO"}
                        ]
                    },
                    {
                        name: "ENSANCHE LA FE  DAS VI", center: [
                            {name: "COLEGIO MARILLAC"},
                            {name: "SOCIEDAD BENEFICA PRO-EMIGRANTES ESPAÑOLES"},
                            {name: "ASILO LA BENDICION DE DIOS"}
                        ]
                    },
                    {
                        name: "JARDINES DEL NORTE (DAS VI)", center: [
                            {name: "UNIVERSIDAD NACIONAL PEDRO HENRIQUEZ UREÑA  (UNPHU)"}
                        ]
                    },
                    {
                        name: "LAS CAOBAS (DAS VII)", center: [
                            {name: "ASOCIACION DE IMPEDIDO FISICO-MOTORES"}
                        ]
                    },
                    {
                        name: "EL ABANICO (DAS VII)", center: [
                            {name: "SALON MULTIUSO DEL ABANICO"}
                        ]
                    },
                    {
                        name: "LAS CAOBAS (DAS VII)", center: [
                            {name: "MULTIUSOS DE LA CAOBA"}
                        ]
                    },
                    {
                        name: "MANOGUAYABO (DAS VII)", center: [
                            {name: "CAPILLA BIENVENIDO"}
                        ]
                    },
                    {
                        name: "BARRIO ENRIQUILLO (DAS VII)", center: [
                            {name: "IGLESIA LAS MERCEDES "}
                        ]
                    },
                    {
                        name: "EL LIBERTADOR (DAS VII)", center: [
                            {name: "IGLESIA DE LOS MORMONES "}
                        ]
                    },
                    {
                        name: "BUENOS AIRES (DAS VII)", center: [
                            {name: "IGLESIA DE LOS MORMONES "}
                        ]
                    },
                    {
                        name: "HERRERA (DAS VII)", center: [
                            {name: "COOPERATIVA DE HERRERA"}
                        ]
                    },
                    {
                        name: "HERRERA (DAS VII)", center: [
                            {name: "HOSPITAL DR MARCELINO VELEZ"}
                        ]
                    },
                    {
                        name: "HERRERA (DAS VII)", center: [
                            {name: "CLUB NUEVO AMBIENTE"}
                        ]
                    },
                    {
                        name: "BARRIO ENRIQUILLO (DAS VII)", center: [
                            {name: "IGLESIA SAN PEDRO NOLASCO"}
                        ]
                    },
                    {
                        name: "EL CAFÉ DE HERRERA (DAS VII)", center: [
                            {name: "CLUB CAJUQUIS"}
                        ]
                    },
                    {
                        name: "HERRERA (DAS VII)", center: [
                            {name: "FUNDACION CARGLAXITON"}
                        ]
                    },
                    {
                        name: "EL CAFÉ DE HERRERA (DAS VII)", center: [
                            {name: "CENTRO COMUNITARIO LAS MINA"}
                        ]
                    },
                    {
                        name: "BARRIO ENRIQUILLO (DAS VII)", center: [
                            {name: "IGLESIA LA CHONTA"}
                        ]
                    },
                    {
                        name: "BARRIO ENRIQUILLO (DAS VII)", center: [
                            {name: "IGLESIA CATOLICA DIVINO NINO"}
                        ]
                    },
                    {
                        name: "BARRIO DUARTE (DAS VII)", center: [
                            {name: "IGLESIA NUEVA VIDA EN CRISTO "}
                        ]
                    },
                    {
                        name: "LAS PALMAS (DAS VII)", center: [
                            {name: "CENTRO DE LA ATENCION PRIMARIA EL MARJANZO"}
                        ]
                    },
                    {
                        name: "MANOGUAYABO (DAS VII)", center: [
                            {name: "IGLESIA CATOLICA"}
                        ]
                    },
                    {
                        name: "HERRERA (DAS VII)", center: [
                            {name: "MULTIOSO IVAN KLNAG"}
                        ]
                    },
                    {
                        name: "BAYONA (DAS VII)", center: [
                            {name: "MISION ENMANUEL "}
                        ]
                    },
                    {
                        name: "BAYONA (DAS VII)", center: [
                            {name: "MULTIOSO SANTO SOCORRO"}
                        ]
                    },
                    {
                        name: "BUENOS AIRES (DAS VII)", center: [
                            {name: "CENTRO DE CAPACITACION (OSCUS)"}
                        ]
                    },
                    {
                        name: "SAN MIGUEL (DAS VII)", center: [
                            {name: "SALON MULTIUSO "}
                        ]
                    },
                    {
                        name: "BELLAS COLINAS (DAS VII)", center: [
                            {name: "MULTIOSO PROGRESANDO EN VALORES"}
                        ]
                    },
                    {
                        name: "MANOGUAYABO (DAS VII)", center: [
                            {name: "IGLESIA PALAVE"}
                        ]
                    },
                    {
                        name: "HATO NUEVO (DAS VII)", center: [
                            {name: "IGLESIA "}
                        ]
                    },
                    {
                        name: "CABAYONA (DAS VII)", center: [
                            {name: "IGLESIA"}
                        ]
                    },
                    {
                        name: "LA CIENEGA (DAS VII)", center: [
                            {name: "IGLESIA CATOLICA  NUESTRA SENORA DE LOURDES"}
                        ]
                    },
                    {
                        name: "AV. CORDILLERA (DAS VII)", center: [
                            {name: "CENTRO COMUNAL "}
                        ]
                    },
                    {
                        name: "PANTOJA (DASVIII)", center: [
                            {name: "IGLESIA CATOLICA NUESTRA SEÑORA DE LA ALTAGRACIA"},
                            {name: "ESTANCIA DE DIA 24 DE ABRIL (HOGAR DE ANCIANO)"},
                            {name: "MULTIUSO PARMAREJO"},
                            {name: "FUNDACION PARA EL MEJORAMIENTO DE LOS ENVEJECIENTES DOMINICANO (FUMEDO)"}
                        ]
                    }
                ]
            },
            {
                name: "MONTE PLATA", municity: [
                    {
                        name: "SABANA GRANDE DE BOYA", center: [
                            {name: "HOGAR DE ANCIANO NUESTRA SEÑORA DE FATIMA"}
                        ]
                    },
                    {
                        name: "MONTE PLATA", center: [
                            {name: "HOGAR DE DIA CARMEN CUADRADO"}
                        ]
                    }
                ]
            },
            {
                name: "SAN CRISTOBAL", municity: [
                    {
                        name: "SAN CRISTOBAL", center: [
                            {name: "HOSP. JUAN PABLO PINA"},
                            {name: "HOSP. RAFAEL J. MAÑÓN"},
                            {name: "DISPENSARIO NTRA. SRA. DE LA PAZ"},
                            {name: "C. GONZÁLEZ BINET"},
                            {name: "CPN LA PISCINA"},
                            {name: "CPN LOS MOLINAS"},
                            {name: "CPN PUERTO RICO"},
                            {name: "CPN MODESTO OGANDO (LAS FLORES)"},
                            {name: "CPN MOSCU"},
                            {name: "CPN SABANA TORO"},
                            {name: "CPN 5 DE ABRIL"},
                            {name: "CPN CAMBITA STERLING"},
                            {name: "CPN DR. RAFAEL GALLARDO (KM4), CLUB ROTARIO"},
                            {name: "CPN VILLA FUNDACION"},
                            {name: "CENTRO DIAGNOSTICO VILLA FUNDACION"},
                            {name: "CPN CEPAE"},
                            {name: "CPN VILLA FEDERICO"},
                            {name: "CPN HATILLO"},
                            {name: "CPN SAN MIGUEL"},
                            {name: "CPN MADRE VIEJA NORTE CENTRO"},
                            {name: "CPN ESTEBANIA BORINQUEN"},
                            {name: "CENTRO DIAGNOSTICO MADRE VIEJA NORTE"},
                            {name: "CPN VILLEGAS"},
                            {name: "CPN CARVAJAL"},
                            {name: "CPN EL POMIER"},
                            {name: "CPN JAMEY"},
                            {name: "CPN MARCELINO PEÑA (EL RAMON)"},
                            {name: "CPN LA CRUZ"},
                            {name: "CPN SANTA MARIA"},
                            {name: "CPN HATO DAMAS (HERMANA MIRABAL)"},
                            {name: "CPN VBENDAÑO"},
                            {name: "CPN MATA NARANJO"},
                            {name: "CPN LOS MONTONES"},
                            {name: "CPN CALLE BONITA"},
                            {name: "CPN SAN ANTONIO"},
                            {name: "CPN LA PLENA"},
                            {name: "CPN MONTAÑO"},
                            {name: "CPN CONANI"},
                            {name: "CPN CANASTICA"},
                            {name: "CPN LA PALMITA"},
                            {name: "CPN NAJAYO ARRIBA"},
                            {name: "CPN PUEBLO NUEVO"},
                            {name: "CPN LAVA PIES"},
                            {name: "CPN LA ALTAGRACIA (SAN CRISTÓBAL)"}
                        ]
                    },
                    {
                        name: "PALENQUE", center: [
                            {name: "HOSP. TOMASINA VALDEZ"},
                            {name: "CPN JUAN BARON"},
                            {name: "CPN LUCIOLO BAEZ"},
                            {name: "CPN SABANA GRANDE"},
                            {name: "CPN LOS PARCELEROS"}
                        ]
                    },
                    {
                        name: "VILLA ALTAGRACIA", center: [
                            {name: "HOSP. M. VILLA ALTAGRACIA"},
                            {name: "CPN V CENTENARIO"},
                            {name: "CPN LA CUCHILLA"},
                            {name: "CPN BARRIO DUARTE"},
                            {name: "CPN VILLA CENTRO"},
                            {name: "CPN MAIZAL"},
                            {name: "CPN MEDINA"},
                            {name: "CPN EL CAOBAL"},
                            {name: "CPN LA REPRESA"},
                            {name: "CPN PINO HERRADO"},
                            {name: "CPN KM 59"},
                            {name: "CPN BASIMA"},
                            {name: "CPN CATAREY"},
                            {name: "CPN EL SILENCIO"},
                            {name: "CPN LA ALTAGRACIA (VILLA ALTAGRACIA)"},
                            {name: "CPN LOS MOGOTES"},
                            {name: "CPN GUANANITO"},
                            {name: "CPN PAJARITO (VILLA ALTAGRACIA)"}
                        ]
                    },
                    {
                        name: "YAGUATE", center: [
                            {name: "HOSP. M. YAGUATE"},
                            {name: "CPN DOÑA ANA"},
                            {name: "CPN YAGUATE (RAMONA SANTANA)"},
                            {name: "CPN PAJARITO (YAGUATE)"},
                            {name: "CPN SEMANA SANTA"},
                            {name: "CPN ARROYO MAMEY"},
                            {name: "CPN BOCA DE MANA"},
                            {name: "CPN MERCEDITO VIZCAINO CABRERA (DUVEAUX)"},
                            {name: "CPN MANA"}
                        ]
                    },
                    {
                        name: "HAINA", center: [
                            {name: "HOSP. MUNICIPAL HAINA"},
                            {name: "CONSL. SAN AGUSTIN"},
                            {name: "ONG ORDEN DE MALTA"},
                            {name: "CENTRO MEDICO HAINA"},
                            {name: "CPN QUITA SUEÑO"},
                            {name: "CPN EL CARRIL"},
                            {name: "CPN MAMA TINGO"},
                            {name: "CPN EL CAJUILITO"},
                            {name: "CPN LA PARED"},
                            {name: "CENTRO DIAGNOSTICO EL CARRIL"},
                            {name: "CPN GERONIMO PINALES (KM. 18)"},
                            {name: "CPN CAMBOYA"},
                            {name: "CPN SAN JOSE"},
                            {name: "CPN NORMAN RUIZ"},
                            {name: "CPN PARAISO DE DIOS"}
                        ]
                    },
                    {
                        name: "LOS CACAOS", center: [
                            {name: "CPN LOS CACAOS"}
                        ]
                    },
                    {
                        name: "CAMBITA", center: [
                            {name: "HOSP. M. CAMBITA GARABITO"},
                            {name: "HOSP. M. CAMBITA PUEBLO"},
                            {name: "CPN EL PUEBLECITO"},
                            {name: "CPN CAMBITA CRUCE"},
                            {name: "CPN MUCHA AGUA"},
                            {name: "CPN LOS TOROS"},
                            {name: "CPN LA COLONIA"},
                        ]
                    },
                    {
                        name: "NIGUA", center: [
                            {name: "HOSP. MARIA PANIAGUA (NIGUA)"},
                            {name: "CPN MIRA CIELO"},
                            {name: "CPN LA CANELA"},
                            {name: "CPN MAL PAEZ"},
                            {name: "POLICLINICA NUESTRA SEÑORA DE LAS MERCEDES"},
                            {name: "CPN LOS BOTAOS"},
                        ]
                    }
                ]
            },
            {
                name: "PERAVIA", municity: [
                    {
                        name: "BANI", center: [
                            {name: "DIRECCION PROVINCIAL DE SALUD PERAVIA"},
                            {name: "HOSPITAL NUESTRA SEÑORA DE REGLA"},
                            {name: "HOSPITAL MUNICIPAL VILLA FUNDACION"},
                            {name: "AYUNTAMIENTO MUNIICIPAL DE BANI"},
                            {name: "GOBERNACION PROVINCIAL PERAVIA"},
                            {name: "DISPENSARIO MEDICO HERMANAS ROSA DE MERA"},
                            {name: "CENTRO DE SALUD MAXIMO GOMEZ"},
                            {name: "CENTRO COMUNAL PADRE ROSSO"},
                            {name: "CENTRO COMUNAL DE SANTA ROSA"},
                            {name: "CENTRO COMUNAL VILLA MAJEGA"},
                            {name: "CENTRO COMUNAL SANTA CRUZ"},
                            {name: "CENTRO COMUNAL PUEBLO NUEVO"},
                            {name: "COLEGIO DE FATIMA AREA DE VACUNACION"},
                            {name: "CONSULTORIO MEDICO EL MANI"}
                        ]
                    },
                    {
                        name: "DON GREGORIO", center: [
                            {name: "CPN DON GREGORIO"}
                        ]
                    },
                    {
                        name: "SANTANA", center: [
                            {name: "CPN SANTANA"}
                        ]
                    },
                    {
                        name: "PIZARRETE", center: [
                            {name: "CPN PIZARRETE"}
                        ]
                    },
                    {
                        name: "LAS BARIAS", center: [
                            {name: "CPN LAS BARIAS"}
                        ]
                    },
                    {
                        name: "CATALINA", center: [
                            {name: "CPN CATALINA"}
                        ]
                    },
                    {
                        name: "EL CARRETON", center: [
                            {name: "CPN EL CARRETON"}
                        ]
                    },
                    {
                        name: "PAYA", center: [
                            {name: "CPN PAYA"}
                        ]
                    },
                    {
                        name: "ESCONDIDO", center: [
                            {name: "CPN ESCONDIDO"}
                        ]
                    },
                    {
                        name: "MATA GORDA", center: [
                            {name: "CPN MATA GORDA"}
                        ]
                    },
                    {
                        name: "FUNDACION DE PERAVIA", center: [
                            {name: "CPN FUNDACION DE PERAVIA"}
                        ]
                    },
                    {
                        name: "RIO ARRIBA", center: [
                            {name: "CPN RIO ARRIBA"}
                        ]
                    },
                    {
                        name: "EL LIMONAL", center: [
                            {name: "CPN EL LIMONAL"}
                        ]
                    },
                    {
                        name: "VALDESIA", center: [
                            {name: "CPN VALDESIA"}
                        ]
                    },
                    {
                        name: "LOS YAGUARIZOS", center: [
                            {name: "CPN LOS YAGUARIZOS"}
                        ]
                    },
                    {
                        name: "VILLA GUERA", center: [
                            {name: "CPN VILLA GUERA"}
                        ]
                    },
                    {
                        name: "MAXIMO GOMEZ", center: [
                            {name: "CPN MAXIMO GOMEZ"}
                        ]
                    },
                    {
                        name: "SAONA", center: [
                            {name: "CPN SAONA"}
                        ]
                    },
                    {
                        name: "VILLA DAVID", center: [
                            {name: "CPN VILLA DAVID"}
                        ]
                    },
                    {
                        name: "CAÑAFISTOL", center: [
                            {name: "CPN CAÑAFISTOL"}
                        ]
                    },
                    {
                        name: "LAS TABLAS", center: [
                            {name: "CPN LAS TABLAS"}
                        ]
                    },
                    {
                        name: "HONDURAS", center: [
                            {name: "CPN HONDURAS"}
                        ]
                    },
                    {
                        name: "LAS CARRERAS", center: [
                            {name: "CPN LAS CARRERAS"}
                        ]
                    },
                    {
                        name: "VILLA SOMBRERO", center: [
                            {name: "CPN VILLA SOMBRERO"}
                        ]
                    },
                    {
                        name: "MATANZAS", center: [
                            {name: "CPN MATANZAS"}
                        ]
                    },
                    {
                        name: "LOS TUMBAOS", center: [
                            {name: "CPN LOS TUMBAOS"}
                        ]
                    },
                    {
                        name: "QUIJA QUIETA", center: [
                            {name: "CPN QUIJA QUIETA"}
                        ]
                    },
                    {
                        name: "ARROYO HONDO", center: [
                            {name: "CPN ARROYO HONDO"}
                        ]
                    },
                    {
                        name: "LAS CALDERAS", center: [
                            {name: "CPN LAS CALDERAS"}
                        ]
                    },
                    {
                        name: "SABANA BUEY", center: [
                            {name: "CPN SABANA BUEY"}
                        ]
                    },
                    {
                        name: "SALINAS", center: [
                            {name: "CPN SALINAS"}
                        ]
                    },
                    {
                        name: "SANTA ROSA", center: [
                            {name: "CPN SANTA ROSA"}
                        ]
                    },
                    {
                        name: "BOCA CANASTA", center: [
                            {name: "CPN BOCA CANASTA"}
                        ]
                    },
                    {
                        name: "EL LLANO", center: [
                            {name: "CPN EL LLANO"}
                        ]
                    },
                    {
                        name: "VILLA MAJEGA", center: [
                            {name: "CPN VILLA MAJEGA"}
                        ]
                    },
                    {
                        name: "WILSON BELLO", center: [
                            {name: "CPN WILSON BELLO"}
                        ]
                    },
                    {
                        name: "NIZAO", center: [
                            {name: "HOSPITAL MUNICIPAL NIZAO"},
                            {name: "CENTRO DE SALUD NIZAO"}
                        ]
                    }
                ]
            },
            {
                name: "AZUA", municity: [
                    {
                        name: "AZUA", center: [
                            {name: "CENTRO DE DIAGNOSTICO DE ACTENCION PRIMARIA"},
                            {name: "HOSPITAL REGIONAL TAIWAN"}
                        ]
                    },
                    {
                        name: "LOS JOBOS", center: [
                            {name: "PUESTO VACUNACION LOS JOBOS 2, CARIZAL, MAJAGUAL, EL HIGUERO, Y JOBO 1"}
                        ]
                    },
                    {
                        name: "LAS LOMAS",
                        center: [{name: "PUESTO VACUNACION UNAPS, LAS LOMAS, VILLA CORAZON, EL BARRO"}]
                    },
                    {
                        name: "PROYECTO",
                        center: [{name: " PUESTO VACUNACION UNAPS  PROYECTO 4, ANZONIA, PUEBLO VIEJO, YAYA1, YAYA2, VIAJAMA, HATO NUEVO, TABARA ARRIBA"}]
                    },
                    {
                        name: "LAS YAYAS",
                        center: [{name: "PUESTO VACUNACION UNAPS YAYAS #1, AMIAMA GOMEZ, SAJANOA, LOS TOROS."}]
                    },
                    {
                        name: "VILLA OCOA",
                        center: [{name: "PUESTO VACUNACION UNAPS, VILLA OCOA, SANTA ANA, MONTE BONITO, LAS LAGUNA, LA SIEMBRA, CAÑITA-A, LOS FRIOS."}]
                    },
                    {name: "PALMAR DE OCOA", center: [{name: "UNAP PALMAR DE OCOA"}]},
                    {
                        name: "LAS CHARCAS",
                        center: [{name: "PUESTO VACUNACION UNAPS CHARCAS, HATILLO, ARROLLO COLORADO, SABANA YEGUA, SAN FCO"}]
                    },
                    {name: "PERALTA", center: [{name: "HOSPITAL PERALTA"}]}
                ]
            },
            {
                name: "SAN JOSE DE OCOA", municity: [
                    {
                        name: "SAN JOSE DE OCOA", center: [
                            {name: "CENTRO DE SALUD EL PINAR"},
                            {name: "CENTRO DE SALUD LOS COROZOS"},
                            {name: "CENTRO DE SALUD EL CERCADO"},
                            {name: "CENTRO DE DIAGNOSTICO"},
                            {name: "CENTRO DE SALUD  SAN ANTONIO"},
                            {name: "CENTRO DE SALUD SAN RAFAEL"},
                            {name: "CENTRO DE SALUD  PUEBLO A BAJO"},
                            {name: "CENTRO DE SALUD  SAN LUIS"},
                            {name: "CENTRO DE SALUD  LAS FLORES"},
                            {name: "CENTRO DE SALUD  LOS MARTINEZ"},
                            {name: "CENTRO DE SALUD  LOS RACHITOS"}
                        ]
                    },
                    {
                        name: "NARANJAL", center: [
                            {name: "CENTRO DE SALUD NARANJAL"},
                            {name: "CENTRO DE SALUD  OJO DE AGUA"}
                        ]
                    },
                    {name: "LA CIENEGA", center: [{name: "CENTRO DE SALUD  LA CIENEGA"}]},
                    {
                        name: "RANCHO ARRIBA", center: [
                            {name: "CENTRO DE SALUD SABANA LARGA CENTRO"},
                            {name: "CENTRO DE SALUD LA HORMA"},
                            {name: "CENTRO DE SALUD SABANA LARGA ABAJO"},
                            {name: "CENTRO DE SALUD LIMONAL"},
                            {name: "CENTRO DE SALUD BANILEJO"},
                            {name: "CENTRO DE SALUD  ARROYO CANA"},
                            {name: "CENTRO DE SALUD  MAHOMA"},
                            {name: "CENTRO DE SALUD  MONTE NEGRO"}
                        ]
                    }
                ]
            },
            {
                name: "SANTIAGO ", municity: [
                    {
                        name: "SANTIAGO I", center: [
                            {name: "CIENFUEGOS (BAJO TECHO)"},
                            {name: "ENSANCHE LIBERTAD (GUG)"},
                            {name: "PARQUE CENTRAL"},
                            {name: "OMSA CLUB NOEL LOS SALADOS"},
                            {name: "CLUB MAMBUICHE"},
                            {name: "ANTIGUO TIPIQUITO (JACAGUA)"}
                        ]
                    },
                    {
                        name: "SANTIAGO I  VILLA GONZALEZ", center: [
                            {name: "EL LIMÓN"},
                            {name: "PALMAR ARRIBA"},
                            {name: "PALMAR ABAJO"},
                            {name: "BANEGAS"},
                            {name: "CENTRO DE LA CIUDAD (PARQUE)"}
                        ]
                    },
                    {
                        name: "SANTIAGO I NAVARRETE", center: [
                            {name: "VILLA TABACALERA"},
                            {name: "ESTANCIA DEL YAQUE"},
                            {name: "LA LOMOTA/VILLA NUEVA (PARQUE)"},
                            {name: "CENTRO DE LA CIUDAD (PARQUE)"}
                        ]
                    },
                    {
                        name: "SANTIAGO II", center: [
                            {name: "CPN LA JOYA"},
                            {name: "PROFAMILIA"},
                            {name: "CPN LA OTRA BANDA"},
                            {name: "CPN VILLA LIBERACION"},
                            {name: "CPN BN LA HERRADURA"},
                            {name: "CPN MAMATINGO"},
                            {name: "CPN LAS CHARCAS"},
                            {name: "HOSPITAL INTEGRAL BELLA VISTA"},
                            {name: "CPN BELLA VISTA"},
                            {name: "CPN YAGUITA DE PASTOR"},
                            {name: "CPN BUEN PASTOR"},
                            {name: "CPN LA CANELA"},
                            {name: "CPN PLATANAL"},
                            {name: "HOSPITAL HATO DEL YAQUE"},
                            {name: "CPN HATO DEL YAQUE"},
                            {name: "CPN LOS GUANDULES"},
                            {name: "CPN VILLA BAO"},
                            {name: "CPN VILLA TABACALERA"},
                            {name: "SABANA IGLESIA"},
                            {name: "CPN BEJUCAL"},
                            {name: "CPN PILONES"},
                            {name: "CPN CAIMITO"},
                            {name: "CPN PINALITO"},
                            {name: "CPN LA CIDRA"},
                            {name: "HOSPITAL MUNICIPAL JANICO"},
                            {name: "CPN DON JUAN"},
                            {name: "CPN PEDREGAL"},
                            {name: "CPN LA CUESTA"},
                            {name: "CPN JANEY"},
                            {name: "CPN JUNCALITO"},
                            {name: "CPN INOA"},
                            {name: "HOSPITAL MUNICIPAL DE SAJOMA"},
                            {name: "CPN LAS MANACLAS"},
                            {name: "CPN EL RUBIO"},
                            {name: "CPN LAS PLACETAS"},
                            {name: "CPN LOS MONTONES"},
                            {name: "CPN RINCON DE PIEDRA"}
                        ]
                    },
                    {
                        name: "SANTIAGO III", center: [
                            {name: "GRAN TEATRO DEL CIBAO"},
                            {name: "CLUB VILLA OLGA"},
                            {name: "CRUZ ROJA"},
                            {name: "PUCMM"},
                            {name: "MULTIUSO PEKIN"},
                            {name: "HOSPITAL JUAN XXIII"},
                            {name: "HOSPITAL DE MONTE ADENTRO"},
                            {name: "CLÍNICA UNIÓN MÉDICA DEL NORTE"},
                            {name: "HOSPITAL METROPOLITANO DE SANTIAGO (HOMS)"},
                            {name: "MATERNO INFANTIL"},
                            {name: "CENTRO MÉDICO CIBAO- UTESA"},
                            {name: "CLÍNICA COROMINAS"},
                            {name: "HOSPITAL CABRAL Y BAEZ"},
                            {name: "HOSPITAL DE ESPECIALIDADES MEDICAS MATERNO INFANTIL (HEMMI)"},
                            {name: "INSTITUTO POLITECNICO INSDUSTRIAL DON BOSCO (IPIDOBO)"}
                        ]
                    },
                    {name: "SANTIAGO III, TAMBORIL", center: [{name: "HOSPITAL MUNICIPAL TAMBORIL"}]},
                    {
                        name: "SANTIAGO III, PUÑAL", center: [
                            {name: "AYUNTAMIENTO EL PUÑAL"},
                            {name: "CLUB DE COLORADO"}
                        ]
                    },
                    {
                        name: "SANTIAGO III, LICEY", center: [
                            {name: "PARROQUIA SAN PIO X"},
                            {name: "HOSPITAL DE LICEY"},
                            {name: "MONUMENTO VIVIENTE"}
                        ]
                    },
                    {name: "SANTIAGO III, BAITOA", center: [{name: "HOSPITAL DE BAITOA "}]}
                ]
            },
            {
                name: "ESPAILLAT", municity: [
                    {
                        name: "MOCA", center: [
                            {name: "POLIDEPORTIVO DE MOCA"},
                            {name: "CANCHA MUNICIPAL MOCA"},
                            {name: "COLEGIO MEDICO DOMINICANO FILIAL MOCA"},
                            {name: "SALON DE ACTIVIDADES BARRIO LA ESTELA"},
                            {name: "CAPILLA SAN MIGUEL (LA ROSA)"},
                            {name: "CPN LOS LOPEZ"},
                            {name: "CPN NUEVO PUERTO RICO"},
                            {name: "CPN BONAGUA"},
                            {name: "CPN LA ERMITA"},
                            {name: "CPN EL HIGUERITO"},
                            {name: "CPN LAS GUAZUMAS"},
                            {name: "CPN REPARADERO"},
                            {name: "CPN TIERRA DURA"},
                            {name: "CPN MONTE DE LA JAGUA"},
                            {name: "CPN SANTA ROSA"},
                            {name: "CPN EL COROZO"},
                            {name: "CPN SAL SI PUEDES"},
                            {name: "CPN CANCA LA REYNA"},
                            {name: "CPN SAN FRANCISCO ARRIBA"},
                            {name: "CPN SAN VICTOR"},
                            {name: "CPN CEIBA DE MADERA"},
                            {name: "CPN BORRA FERREA"},
                            {name: "CPN JUAN LOPEZ"},
                            {name: "CPN ZAFARRAYA"},
                            {name: "CPN DE GUAUCI"},
                            {name: "CPN LAS FLORES"},
                            {name: "CPN CUERO DURO"},
                            {name: "CPN LA ISLETA"},
                            {name: "CPN LA MANZANA"},
                            {name: "CPN QUEBRADA HONDA"},
                            {name: "CPN LAS LAGUNAS"},
                            {name: "CPN LOS PANCHOS"},
                            {name: "CPN VIEJO PUERTO RICO"},
                            {name: "CPN MANUEL DE RODRIGUEZ"}
                        ]
                    },
                    {
                        name: "CAYETANO GERMOSEN", center: [
                            {name: "CPN LA GUAZUMA"},
                            {name: "CLUB CASINO RENACIMIENTO"},
                            {name: "CPN ALGARROBO"}
                        ]
                    },
                    {
                        name: "VILLA TRINA", center: [
                            {name: "HOSPITAL JOSÉ CONTRERAS"},
                            {name: "CPN PALMA HERRADA"},
                            {name: "SALON PARROQUIAL IGLESIA VILLA TRINA"}
                        ]
                    },
                    {
                        name: "GASPAR HERNANDEZ", center: [
                            {name: "CPN BATEY GINEBRA"},
                            {name: "CPN LA YAGUA"},
                            {name: "CPN VILLA PROGRESO"},
                            {name: "CPN JOBA ARRIBA"},
                            {name: "CPN VERAGUA"},
                            {name: "CENTRO PARROQUIAL IGLESIA GH"}
                        ]
                    },
                    {
                        name: "JAMAO AL NORTE", center: [
                            {name: "CPN EL CAIMITO"},
                            {name: "CPN VILLA CAFETALERA"},
                            {name: "CPN LOS PUENTES"},
                            {name: "CPN LOS BRAZOS"}
                        ]
                    }
                ]
            },
            {
                name: "PUERTO PLATA", municity: [
                    {name: "SAN FELIPE", center: [{name: "CENTRO SANITARIO FRANCISCO GONZÁLEZ HARDY"}]},
                    {name: "SAN FELIPE", center: [{name: "DPS PUERTO PLATA"}]},
                    {
                        name: "SAN FELIPE",
                        center: [{name: "PARQUE JUAN GARCÍA, SECTOR GREGORIO LUPERÓN, SAN FELIPE DE PUERTO PLATA"}]
                    },
                    {name: "PADRE DE LAS CASAS", center: [{name: "PLAY DEL SECTOR PADRE LAS CASAS"}]},
                    {name: "GUANANICO", center: [{name: "HOSPITAL MUNICIPAL DE GUANANICO"}]},
                    {name: "SAN FELIPE", center: [{name: "CPN  SAN MARCOS"}]},
                    {name: "VILLA ISABELLA", center: [{name: "HOSPITAL MUNICIPAL DE VILLA ISABELA"}]}
                ]
            },
            {
                name: "DUARTE", municity: [
                    {
                        name: "SAN FRANCISCO DE MACORIS", center: [
                            {name: "CANCHA SAN MARTIN"},
                            {name: "COLEGIO SAN FRANCISCO"},
                            {name: "CIUDAD GANADERA"},
                            {name: "CENTRO COMUNAL PABLO VI"},
                            {name: "CLUB 27 DE FEBRERO"},
                            {name: "CLUB DE LOS PROFESORES"},
                            {name: "CENTRO DE VACUNACION SIGLO 21"},
                            {name: "FUNDACION ADAMES"}
                        ]
                    },
                    {name: "ARENOSO", center: [{name: "MULTIUSO BAJO TECHO ARENOSO"}]},
                    {name: "VILLA RIVAS", center: [{name: "MULTIUSO BAJO TECHO VILLA RIVAS"}]},
                    {name: "CASTILLO", center: [{name: "CENTRO COMUNAL DE CASTILLO"}]},
                    {name: "PIMENTEL", center: [{name: "MULTIUSO ARENA  57"}]},
                    {name: "LAS GUARANAS", center: [{name: "CLUB BLUE"}]}
                ]
            },
            {
                name: "MARIA TRINIDAD SANCHEZ", municity: [
                    {
                        name: "NAGUA", center: [
                            {name: "UNIVERSIDAD AUTONOMA DE SANTO DOMNGO NUEVA"},
                            {name: "CENTRO COMUNITARIO SAN JOSE DE VILLA"},
                            {name: "UNIVERSIDAD AUTONOMA DE SANTO DOMNGO VIEJA"},
                            {name: "POLIDEPORTIVO NAGUA"},
                            {name: "PARROQUIA SANTISIMA TRINIDAD"},
                            {name: "UNIVERSIDAD ABIERTA PARA ADULTOS (UAPA)"},
                            {name: "AYUNTAMIENTO O CPN LOS ALMENDROS MATANCITAS"},
                            {name: "CENTRO COMUNITARIO LOS YAYALES"},
                            {name: "CPN LAS GARZAS"},
                            {name: "CPN LAS CEJAS"},
                            {name: "CRUCE DE RICON"},
                            {name: "AYUNTAMIENTO  ARROYO AL MEDIO"},
                            {name: "CPN EL YAYAL"},
                            {name: "CPN EL GUAYABO"},
                            {name: "CPN LAS CORCOBAS"},
                            {name: "LA IGLESIA"},
                            {name: "CPN LAS GORDAS"},
                            {name: "CENTRO COMUNITARIO MATA BONITA"}
                        ]
                    },
                    {
                        name: "EL FACTOR", center: [
                            {name: "CASA DE FORMACION SAGRADA FAMILIA"},
                            {name: "PARROQUIA SAN FRANCISCO DE ASIS"},
                            {name: "CPN EL PAPAYO"},
                            {name: "CLUD DEL HELECHAL"},
                            {name: "AYUNTAMIENTO DEL POZO"},
                            {name: "PARROQUIA NUESTRA SEÑORA DEL ROSARIO"},
                            {name: "CENTRO COMUNITARIO"},
                            {name: "CPN LA PICHINGA"},
                        ]
                    },
                    {
                        name: "CABRERA", center: [
                            {name: "CENTRO COMUNITARIO PAYITA"},
                            {name: "CPN BAOBA DEL PIÑAL"},
                            {name: "CPN SAN RAFAEL"},
                            {name: "CPN COPEYITO"},
                            {name: "CPN LA CAPILLA"},
                            {name: "IGLESIA"},
                            {name: "POLIDEPORTIVO CABRERA"},
                            {name: "CPN LOMA ALTA"},
                            {name: "CPN ABREU"}
                        ]
                    },
                    {
                        name: "RIO SAN JUAN", center: [
                            {name: "POLIDEPORTIVO RIO SAN JUAN"},
                            {name: "CPN BEJUCO ALAMBRE"},
                            {name: "CPN BOBITA"}
                        ]
                    }
                ]
            },
            {
                name: "SAMANA", municity: [
                    {
                        name: "SANTA BARBARA", center: [
                            {name: "POLIDEPORTIVO MUNICIPAL"},
                            {name: "VILLA CLARA"},
                            {name: "HONDURAS"},
                            {name: "CENTRO COMUNAL RANCHO  ESPAÑOL"}
                        ]
                    },
                    {
                        name: "LIMON", center: [
                            {name: "CENTRO TECNOLOGICO LINCOLN"}
                        ]
                    },
                    {
                        name: "LAS GALERAS", center: [
                            {name: "CASA PASTORAL IGLESIA DE DIOS LA PROFESIA"},
                            {name: "LOS CACAOS"},
                        ]
                    },
                    {
                        name: "ARROYO BARRIL", center: [
                            {name: "LOS ROBALOS (CENTRO COMUNAL)"}
                        ]
                    },
                    {
                        name: "SANCHEZ", center: [
                            {name: "CENTRO COMUNAL (LAS GARITAS)"},
                            {name: "CENTRO COMUNAL (LOS CORRALES)"},
                            {name: "POLIDEPORTIVO MUNICIPAL SANCHEZ"},
                            {name: "AYUNTAMIENTO MUNICIPAL SANCHEZ"}
                        ]
                    },
                    {
                        name: "LAS TERRENAS", center: [
                            {name: "POLIDEPORTIVO MUNICIPAL LAS TERRENAS"},
                            {name: "CENTRO COMUNAL (NARANJITO)"}
                        ]
                    }
                ]
            },
            {
                name: "HERMANAS MIRABAL", municity: [
                    {
                        name: "SALCEDO", center: [
                            {name: "CASA DE LA TERCERA EDAD"}
                        ]
                    },
                    {
                        name: "VILLA TAPIA", center: [
                            {name: "HOGAR DE ANCIANO PADRE NOEL"}
                        ]
                    },
                    {
                        name: "TENARES", center: [
                            {name: "CASA MANUEL FLORENTINO"}
                        ]
                    },
                    {
                        name: "SALCEDO", center: [
                            {name: "ASOCIACION MEDICA"}
                        ]
                    },
                    {
                        name: "SALCEDO", center: [
                            {name: "CASA DE LOS JOVENES DE AYER"}
                        ]
                    }
                ]
            },

            {
                name: "BARAHONA", municity: [
                    {
                        name: "BARAHONA", center: [
                            {name: "CATEDRAL NUESTRA SEÑORA DEL ROSARIO"},
                            {name: "IGLESIA DEL NAZARENO"},
                            {name: "OFICINA DE CORREOS Y TELECOMUNICACIONES"},
                            {name: "INSTITUTO AGRARIO DOMINICANO (IAD)"},
                            {name: "CAPILLA SAN DIEGO"},
                            {name: "LICEO DR. FEDERICO HENRIQUEZ Y CARVAJAL"},
                            {name: "VILLA OLIMPICA"},
                            {name: "IGLESIA DE LA ROTONDA"},
                            {name: "CLUB DE CACHON"},
                            {name: "MULTIUSO BARAHONA"},
                            {name: "ESCUELA LA LISTA"},
                            {name: "CENTRO COMUNITARIO BARAHONA"},
                            {name: "SALA CAPITULAR"},
                            {name: "ESCUELA PRIMARIA DE ARROLLO DULCE"},
                            {name: "CENTRO COMUNITARIO"},
                            {name: "CENTRO TEGNOLOGICO"},
                            {name: "LICEO ALTAGRACIA B. GONZALEZ"},
                            {name: "CLUB GALLISTICO DON GENIN"},
                            {name: "ESCUELA MANUEL E. MATOS"},
                            {name: "IGLESIA PASTORA YOHANNA"},
                            {name: "ESCUELA COPA"},
                            {name: "IGLESIA DE LA PASTORA LEA"},
                            {name: "IGLESIA CATOLICA"}
                        ]
                    },
                    {
                        name: "D.M. VILLA CENTRAL", center: [
                            {name: "CLUB JUAN PABLO DUARTE"},
                            {name: "PABELLON DE BALONCESTO, VILLA OLIMPICA"},
                            {name: "UNIVERSIDAD CATOLICA TECNOLOGICA DE BARAHONA (UCATEBA)"},
                            {name: "PABELLON DE ENTRENAMIENTO VILLA OLIMPICA"}
                        ]
                    },
                    {
                        name: "MUNICIPIO DEL CABRAL", center: [
                            {name: "MULTIUSO DE CABRAL"},
                            {name: "CLUB DE LEONES DE CABRAL"},
                            {name: "CENTRO COMUNAL DE CABRAL"},
                            {name: "JUZGADO DE PAZ"}
                        ]
                    },
                    {
                        name: "VICENTE NOBLE", center: [
                            {name: "HOSPITAL MUNICIPAL VICENTE NOBLE"}
                        ]
                    },
                    {
                        name: "DISTRITO MUNICIPAL LA CIÉNAGA", center: [
                            {name: "HOSPITAL MUNICIPAL VICENTE NOBLE"}
                        ]
                    },
                    {
                        name: "DISTRITO MUNICIPAL PARAÍSO", center: [
                            {name: "MULTIUSO"},
                            {name: "AYUNTAMIENTO MUNICIPAL"},
                            {name: "SALON PARROQUIAL, IGLESIA CATOLICA VIEJA"},
                            {name: "AYUNTAMIENTO DE PARAISO"}
                        ]
                    },
                    {
                        name: "MUNICIPIO POLO", center: [
                            {name: "MULTIUSO DE POLO"},
                            {name: "CASA DE LA CULTURA, DANIEL FCO. URBÁEZ GÓMEZ"}
                        ]
                    },
                    {name: "MUNICIPIO ENRIQUILLO", center: [{name: "AYUNTAMIENTO DE ENRIQUILLO"}]},
                    {name: "QUITA CORAZA (DM)", center: [{name: "UNAP DE QUITA CORAZA"}]},
                    {name: "LOS PATOS (DM)", center: [{name: "LICEO DE LOS PATOS"}]},
                    {name: "ARROYO DULCE (SECCION)", center: [{name: "ESCUELA PRIMARIA DE ARROLLO DULCE"}]}
                ]
            },
            {
                name: "BAHORUCO", municity: [
                    {
                        name: "NEIBA", center: [
                            {name: "MULTIUSO MUNICIPAL"},
                            {name: "HOSPITAL SAN BARTOLOMÉ"},
                            {name: "COLEGIO MEDICO"}
                        ]
                    },
                    {
                        name: "EL SALADO", center: [
                            {name: "UNAP EL SALADO"}
                        ]
                    },
                    {
                        name: "GALVÁN", center: [
                            {name: "UNAP GALVÁN"}
                        ]
                    },
                    {
                        name: "TAMAYO", center: [
                            {name: "UNAPTAMAYO"}
                        ]
                    },
                    {
                        name: "VILLA JARAGUA", center: [
                            {name: "UNAP VILLA JARAGUA"}
                        ]
                    },
                    {
                        name: "LOS RÍOS", center: [
                            {name: "UNAP LOS RÍOS"}
                        ]
                    },
                    {
                        name: "CLAVELLINAS", center: [
                            {name: "UNAP CLAVELLINAS"}
                        ]
                    }
                ]
            },
            {
                name: "INDEPENDENCIA", municity: [
                    {
                        name: "JIMANI", center: [
                            {name: "CPN JIMANI VIEJO. BARRIO JIMANI VIEJO."},
                            {name: "CPN JIMANI CENTRO."},
                            {name: "CPN TIERRA NUEVA."},
                            {name: "CPN BOCA DE CACHON."},
                            {name: "CPN EL LIMÓN."},
                            {name: "CENTRO DIAGNÓSTICO."}
                        ]
                    },
                    {
                        name: "DUVERGE", center: [
                            {name: "CPN LAS BAITOAS."},
                            {name: "CPN VENGAN A VER."},
                            {name: "CPN SAN JOSÉ."},
                            {name: "CPN LAS MERCEDES."},
                            {name: "CPN SAN ISIDRO."},
                            {name: "CPN PLACER BONITO."},
                            {name: "CPN PUESTO ESCONDIDO."}
                        ]
                    },
                    {
                        name: "MELLA", center: [
                            {name: "CPN COLONIA MIXTA."},
                            {name: "CPN MELLA."},
                            {name: "CPN ANGOSTURA."}
                        ]
                    },
                    {
                        name: "CRISTÓBAL", center: [
                            {name: "CPN CRISTÓBAL."},
                            {name: "CPN BATEY 8."}
                        ]
                    },
                    {
                        name: "LA DESCUBIERTA", center: [
                            {name: "CPN BARTOLOMÉ."},
                            {name: "CPN LOS PINOS DEL EDÉN."},
                            {name: "CPN LA DESCUBIERTA."}
                        ]
                    },
                    {
                        name: "POSTRER RÍO", center: [
                            {name: "CPN POSTRER RÍO."},
                            {name: "CPN EL GUAYABAL."},
                            {name: "CPN LOS BOLOS."}
                        ]
                    }
                ]
            },
            {
                name: "PEDERNALES", municity: [
                    {
                        name: "PEDERNALES", center: [
                            {name: "UNAP 3 Y 4"},
                            {name: "UNAP  5 Y 6"}
                        ]
                    },
                    {
                        name: "OVIEDO", center: [
                            {name: "UNAP 7 Y 8"},
                            {name: "UNAP  9"}
                        ]
                    }
                ]
            },
            {
                name: "SAN PEDRO DE MACORIS", municity: [
                    {
                        name: "SAN PEDRO DE MACORIS", center: [
                            {name: "LOCAL DE JUNTAS DE VECINOS"},
                            {name: "GOBERNACION PROVINCIAL"},
                            {name: "UNIVERSIDAD CENTRAL DEL ESTE (UCE)"},
                            {name: "LOCAL DE LOS BOMBEROS"},
                            {name: "LOCAL DE LOS MUELLEROS"},
                            {name: "CAPILLA SAGRADO CORAZON DE JESUS"},
                            {name: "CONSULTORIO GERIATRICO DR. CARL GEORGE"},
                            {name: "IGLESIA CIRCULO DE ORACION"}
                        ]
                    },
                    {name: "RAMON SANTANA", center: [{name: "SALON AYUNTANIENTO"}]},
                    {
                        name: "LOS LLANOS", center: [
                            {name: "LOCAL DE LA CRUZ ROJA"},
                            {name: "HOGAR DE ENVEJECIENTES SANTA CATALINA"}
                        ]
                    }
                ]
            },
            {
                name: "LA ROMANA", municity: [
                    {
                        name: "LA ROMANA", center: [
                            {name: "UNAP CENTRO COMUNAL"},
                            {name: "UNAP PICA PIEDRA (CENTRO NUEVO)"},
                            {name: "UNAP ANTITUBERCULOSO DR. LUIS J. SUAREZ"},
                            {name: "UNAP TOMAS DESIR LEBRON"},
                            {name: "UNAP ESCUELA PAULINA JIMENEZ"},
                            {name: "UNAP CONANI LA ROMANA"},
                            {name: "UNAP CONSULTORIO RURAL KM. 14 CUMAYASA"},
                            {name: "UNAP SAONA"},
                            {name: "UNAP CONSULTORIO RURAL KM. 11 CUMAYASA"},
                            {name: "UNAP HIGUERAL"},
                            {name: "UNAP PADRE CAVALOTTO"},
                            {name: "UNAP CUCAMA"},
                            {name: "UNAP PIEDRA LINDA"},
                            {name: "UNAP NIÑO DE CRISTO"},
                            {name: "ESCUELA VOCACIONAL DE FFAA Y PN"},
                            {name: "EPISCOPAL"},
                            {name: "UNAP EL BOTIQUIN"},
                            {name: "UNAP CALETA"},
                            {name: "UNAP VILLA REAL"},
                            {name: "UNAP LOS COCOS"},
                            {name: "UNAP LA EXPERIENCIA"},
                            {name: "UNAP MARIA TRINIDAD SANCHEZ"}
                        ]
                    },
                    {
                        name: "LA ROMANA VILLA HERMOSA", center: [
                            {name: "UNAP VILLA HERMOSA 3"},
                            {name: "VILLA HERMOSA 4"},
                            {name: "UNAP VILLA HERMOSA 1 Y 2"},
                            {name: "UNAP VILLA HERMOSA 5"}
                        ]
                    }
                ]
            },
            {
                name: "HATO MAYOR", municity: [
                    {name: "HATO MAYOR", center: [{name: "UNAP LAS CHINAS"}]},
                    {
                        name: "HATO MAYOR DEL REY", center: [
                            {name: "UNAP GUALEY"},
                            {name: "UNAP BARRIO LINDO"},
                            {name: "UNAP VILLA CANTO"},
                            {name: "UNAP VILLA ORTEGA"},
                            {name: "UNAP VILLA NAVARRO"},
                            {name: "UNAP PUNTA DE GARZA"},
                            {name: "UNAP PUERTO RICO"},
                            {name: "UNAP LAS GUAMAS"},
                            {name: "UNAP GUAYABO DULCE"},
                            {name: "UNAP JALONGA"},
                            {name: "UNAP LOS HATILLOS"},
                            {name: "UNAP LA CIERRA"},
                            {name: "UNAP YERBA BUENA"},
                            {name: "UNAP MORQUECHO"},
                            {name: "UNAP KM 15"},
                            {name: "UNAP MANCHADO"},
                            {name: "UNAP EL MAMON"},
                            {name: "UNAP LA PLAZA"},
                            {name: "HOGAR DE ANCIANOS DOÑA ROMELIA SALAS DE BARCELO"},
                            {name: "HOSPITAL EL VALLE"}
                        ]
                    },
                    {name: "EL VALLE", center: [{name: "UNAP LAS CAÑITAS"}]},
                    {name: "SABANA DE LA MAR", center: [{name: "UNAP MAGUA"}]}
                ]
            },
            {
                name: "EL SEIBO", municity: [
                    {
                        name: "EL SEIBO", center: [
                            {name: "CENTRO TECNOLOGICO COMUNITARIO"},
                            {name: "CENTRO CAMPESINO"},
                            {name: "DEFENSA CIVIL"},
                            {name: "HOGAR DE ENVEJECIENTE"},
                            {name: "CASA CLUB DE GINANDIANA"}
                        ]
                    }
                ]
            },
            {
                name: "LA ALTAGRACIA", municity: [
                    {name: "LOS PLATANITOS", center: [{name: "UNAP LOS PLATANITOS "}]},
                    {name: "LOS ROSALES", center: [{name: "UNAP LOS ROSALES"}]},
                    {name: "LA MALENA", center: [{name: "UNAP LA MALENA"}]},
                    {name: "JUAN PABLO DUARTE", center: [{name: "UNAP JUAN PABLO DUARTE"}]},
                    {name: "MAMATINGO", center: [{name: "UNAP MAMATINGO"}]},
                    {name: "PEPE ROSARIO", center: [{name: "UNAP PEPE ROSARIO"}]},
                    {name: "SAN PEDRO", center: [{name: "UNAP SAN PEDRO"}]},
                    {name: "SANTANA", center: [{name: "UNAP SANTANA"}]},
                    {name: "MATACHALUPE", center: [{name: "UNAP MATACHALUPE"}]},
                    {name: "LOS GUINEOS", center: [{name: "UNAP LOS GUINEOS"}]},
                    {name: "LAS GUAMAS", center: [{name: "UNAP LAS GUAMAS"}]},
                    {name: "HATO DE MANA", center: [{name: "UNAP HATO DE MANA"}]},
                    {name: "LOS SOTO", center: [{name: "UNAP LOS SOTO"}]},
                    {name: "LA FLORIDA", center: [{name: "UNAP LA FLORIDA"}]},
                    {name: "LA OTRA BANDA", center: [{name: "UNAP LA OTRA BANDA"}]},
                    {name: "EL SALADO", center: [{name: "UNAP EL SALADO"}]},
                    {name: "BLANDINO", center: [{name: "UNAP  BLANDINO"}]},
                    {name: "ANAMUYA", center: [{name: "UNAP ANAMUYA"}]},
                    {name: "LOS NEGROS", center: [{name: "UNAP LOS NEGROS "}]},
                    {name: "BOCA DE YUMA", center: [{name: "UNAP BOCA DE YUMA"}]},
                    {name: "BENERITO", center: [{name: "UNAP BENERITO"}]},
                    {name: "BAYAHIBE", center: [{name: "UNAP BAYAHIBE"}]},
                    {name: "SAN MARTIN", center: [{name: "UNAP SAN MARTIN"}]},
                    {name: "LLANADA DEL CERRO", center: [{name: "UNAP LLANADA DEL CERRO"}]},
                    {name: "VILLA CERRO", center: [{name: "UNAP VILLA CERRO"}]},
                    {name: "LOS CERRITOS", center: [{name: "UNAP LOS CERRITOS"}]},
                    {name: "BOCA DE CHAVON", center: [{name: "UNAP BOCA DE CHAVON"}]},
                    {name: "PEÑON DE LOS REYES", center: [{name: "UNAP PEÑON DE LOS REYES"}]},
                    {name: "JINA JARAGUA", center: [{name: "UNAP JINA JARAGUA"}]},
                    {name: "CAÑADA HONDA", center: [{name: "UNAP CAÑADA HONDA "}]},
                    {name: "GUANIABANO", center: [{name: "UNAP GUANIABANO"}]},
                    {name: "LA ENEA", center: [{name: "UNAP LA ENEA"}]},
                    {name: "POLITUR FRIUSA", center: [{name: "UNAP POLITUR FRIUSA"}]},
                    {name: "LA GUAZUMA", center: [{name: "UNAP LA GUAZUMA"}]},
                    {name: "SAN FRANCISCO", center: [{name: "UNAP SAN FRANCISCO"}]},
                    {name: "VERON", center: [{name: "UNAP VERON"}]},
                    {name: "MAGADALENA", center: [{name: "UNAP MAGADALENA"}]},
                    {name: "LA ALTAGRACIA", center: [{name: "DPS LA ALTAGRACIA"}]},
                    {name: "LAS LAGUNAS DE NISIBON", center: [{name: "CENTRO COMUNAL LAS LAGUNAS DE NISIBON "}]},
                    {name: "LA OTRA BANDA", center: [{name: "CENTRO COMUNAL LA OTRA BANDA"}]},
                    {
                        name: "VERON", center: [
                            {name: "CENTRO COMUNAL DE VERON"},
                            {name: "CASA DE LA CULTURA FRIUSA, FRIUSAIUSA"}
                        ]
                    },
                    {
                        name: "SAN RAFAEL DE YUMA", center: [
                            {name: "CENTRO COMUNAL SAN RAFAEL DE YUMA"}
                        ]
                    },
                    {
                        name: "PUNTA CANA", center: [
                            {name: "CENTRO MÉDICO PUNTA CANA. AVENIDA ESTADOS UNIDOS, PUNTA CANA"}
                        ]
                    }
                ]
            },
            {
                name: "SAN JUAN DE LA MAGUANA", municity: [
                    {
                        name: "SAN JUAN DE LA MAGUANA", center: [
                            {name: "CODIA"},
                            {name: "IGLESIA ESPIRITU SANTOS"},
                            {name: "POLIDEPORTIVO"},
                            {name: "CENTRO TEGNOLOGICO"},
                            {name: "ESCUELA ENRIQUILLO"},
                        ]
                    },
                    {
                        name: "LAS MATAS", center: [
                            {name: "CENTRO DIAGNOSTICO"},
                            {name: "AYUNTAMIENTO"},
                            {name: "ASC. AYUDA MUTUA"}
                        ]
                    },
                    {name: "BOHECHIO", center: [{name: "CENTRO TEGNOLOGICO"}]},
                    {name: "EL CERCADO", center: [{name: "JUZGADO DE PAZ"}]},
                    {name: "VALLEJUELO", center: [{name: "CPN VALLEJUELO"}]},
                    {
                        name: "JUAN HERRERA", center: [
                            {name: "CENTRO TEGNOLOGICO"},
                            {name: "ESCUELA ARISTIDES MATEO MATEO"}
                        ]
                    }
                ]
            },
            {
                name: "ELIAS PIÑA", municity: [
                    {
                        name: "COMENDADOR", center: [
                            {name: "HOSPITAL ROSA DUARTE"},
                            {name: "HOGAR DE ANCIANOS SANTA TERESA"},
                            {name: "POLIDEPORTIVO"},
                            {name: "CENTRO TECNOLOGICO COMUNITARIO (CTC)"},
                            {name: "CPN GUAYABO"},
                            {name: "CPN SABANA LARGA"},
                            {name: "CPN HATO VIEJO"},
                            {name: "CPN POTROSO"},
                            {name: "CPN PINZON"},
                            {name: "CPN RINCONCTO"},
                            {name: "CPN MACASIA"}
                        ]
                    },
                    {
                        name: "EL LLANO", center: [
                            {name: "CPN EL LLANO"},
                            {name: "HOGAR DE ANCIANO SAN ISIDRO LABRADOR"},
                            {name: "POLIDEPORTIVO"},
                            {name: "CPN GUANITO"},
                            {name: "CPN ROSA LA PIEDRA"}
                        ]
                    },
                    {
                        name: "BANICA", center: [
                            {name: "HOGAR DE ANCIANO SAN FRANSCISCO DE ASIS"},
                            {name: "POLIDEPORTIVO"},
                            {name: "CPN SABANA HIGUERO"},
                            {name: "CPN SABANA CRUZ"},
                            {name: "CPN SABANA MULA"}
                        ]
                    },
                    {
                        name: "PEDRO SANTANA", center: [
                            {name: "CPN PEDRO SANTANA"},
                            {name: "CPN LAS PALMAS"}
                        ]
                    },
                    {
                        name: "JUAN SANTIAGO", center: [
                            {name: "CPN DE JUAN SANTIAGO"},
                            {name: "CENTRO TECNOLOGICO COMUNITARIO (CTC)"}
                        ]
                    },
                    {
                        name: "HONDO VALLE", center: [
                            {name: "HOSPITAL DE HONDO VALLE"},
                            {name: "POLIDEPORTIVO"},
                            {name: "CPN RANCHO DE LA GUARDIA"}
                        ]
                    }
                ]
            },
            {
                name: "VALVERDE", municity: [
                    {
                        name: "LAGUNA SALADA", center: [
                            {name: "CLINICA MONTESINO"},
                            {name: "UNAP CENTRO"}
                        ]
                    },
                    {
                        name: "MAO", center: [
                            {name: "COLEGIO MEDICO"},
                            {name: "CLUB DE LEONES"}
                        ]
                    }
                ]
            },
            {
                name: "SANTIAGO RODRIGUEZ", municity: [
                    {
                        name: "SAN IGNACIO DE SABANETA", center: [
                            {name: "DEFENSA CIVIL"},
                            {name: "DIRECCIÓN PROVINCIAL DE SALUD"},
                            {name: "OFICINA SENATORIAL"},
                            {name: "ASOCIACIÓN DE CHÓFERES"}
                        ]
                    },
                    {
                        name: "VILLA LOS ALMACIGOS", center: [
                            {name: "AYUNTAMIENTO MUNICIPAL DE VILLA LOS ALMACIGOS"},
                            {name: "OFICINA DE AGRICULTURA"},
                            {name: "CENTRO DE MADRES, LA CEIBA"}
                        ]
                    },
                    {
                        name: "MONCION", center: [
                            {name: "AYUNTAMIENTO MUNICIPAL MONCIÓN"},
                            {name: "CENTRO TECNOLÓGICO"},
                            {name: "LOS BOMBEROS"},
                        ]
                    }
                ]
            },
            {
                name: "MONTECRISTI", municity: [
                    {
                        name: "VILLA VÁSQUEZ", center: [
                            {name: "IGLESIA O PARQUE VILLA GARCÍA"},
                            {name: "CARPA HOSPITAL VILLA VÁSQUEZ"},
                            {name: "PARQUE VILLA VÁSQUEZ"},
                            {name: "TECHADO/ POLIDEPORTIVO"},
                            {name: "PARQUE LOS UVEROS"},
                            {name: "LOS CONUCOS"},
                            {name: "FELTREX BOTONCILLO"},
                        ]
                    },
                    {
                        name: "LAS MATAS DE SANTA CRUZ", center: [
                            {name: "POLIDEPORTIVO"},
                            {name: "INDRHI"},
                            {name: "AYUNTAMIENTO"},
                            {name: "UNAP SANTA CRUZ"},
                        ]
                    },
                    {
                        name: "PEPILLO SALCEDO (MANZANILLO)", center: [
                            {name: "POLIDEPORTIVO"},
                            {name: "CARBONERA"},
                            {name: "UNAP COPEY"},
                        ]
                    },
                    {
                        name: "CASTAÑUELAS", center: [
                            {name: "PLEY SANTA MARÍA"},
                            {name: "BOMBEROS"},
                            {name: "POLIDEPORTIVO"},
                            {name: "JOBO Y BOHÍO VIEJO"},
                            {name: "CENTRO COMUNAL LOMA"},
                        ]
                    },
                    {
                        name: "EL VIGIADOR (KM 17)", center: [
                            {name: "PARQUE LOMA (CARPA)"},
                            {name: "CLUB VIGIADOR"},
                            {name: "ESCUELA"},
                        ]
                    },
                    {
                        name: "PALO VERDE", center: [
                            {name: "IGLESIA"},
                            {name: "PLEY MAGDALENA (CARPA)"},
                        ]
                    },
                    {
                        name: "GUAYUBIN", center: [
                            {name: "BOMBEROS (EL AHOGADO)"},
                            {name: "PARQUE"},
                            {name: "MARTIN GARCÍA"},
                            {name: "LOCAL VILLA SINDA (FRENTE A LA ESCUELA)"},
                            {name: "CLUB EL POCITO"},
                            {name: "SABANA CRUZ"},
                            {name: "CERRO GORDO"},
                            {name: "UNAP"},
                            {name: "AYUNTAMIENTO CANA CHAPETÓN"},
                            {name: "PILOTO IGLESIA"},
                            {name: "UNAP PAPAYO"},
                            {name: "UNAP COPEY"},
                            {name: "UNAP HATO DEL MEDIO"},
                            {name: "VILLA LOBO ADENTRO"},
                            {name: "AGUA DE LUIS"},
                            {name: "UNAP DERRAMADERO"},
                            {name: "GUAJACA"},
                            {name: "VILLA ELISA AYUNTAMIENTO"},
                        ]
                    },
                    {
                        name: "HATILLO PALMA", center: [
                            {name: "VILLA ELISA CENTRO DE MADRE"},
                            {name: "DOÑA ANTONIA"},
                            {name: "UNAP HATILLO PALMA"},
                            {name: "CLUB HATILLO PALMA"},
                            {name: "LA CAÍDA"},
                        ]
                    },
                    {
                        name: "MONTECRISTI", center: [
                            {name: "IGLESIA HATILLO PALMA"},
                            {name: "GOBERNACIÓN"},
                            {name: "POLIDEPORTIVO"},
                            {name: "CASA DE PROMOCIÓN"},
                            {name: "LOGIA NEWMAN"},
                            {name: "BIBLIOTECA (CARPA)"},
                            {name: "AYUNTAMIENTO (SALÓN)"},
                            {name: "INESPRE"},
                            {name: "PARQUE BELLA VISTA (CARPA)"},
                            {name: "CLUB SAN PEDRO"},
                            {name: "PARQUE DEL PUENTE (CARPA)"},
                            {name: "IGLESIA KM 13"},
                            {name: "IGLESIA KM 12"},
                            {name: "PROYECTO LA CRUZ"},
                            {name: "CONUCO Y JUDEA (CENTRO COMUNAL)"},
                            {name: "EN EL PARQUE RELOD"},
                        ]
                    },
                    {name: "PEPILLO SALCEDO (MANZANILLO)", center: [{name: "EN EL PARQUE MANOLO TAVAREZ"}]},
                    {name: "VILLA VASQUEZ", center: [{name: "POLIDEPORTIVO"}]},
                    {name: "CASTAÑUELA", center: [{name: "POLIDEPORTIVO"}]},
                    {name: "GUAYUBIN", center: [{name: "PARQUE"}]},
                    {name: "CANA CHAPETON", center: [{name: "POLIDEPORTIVO"}]},
                    {
                        name: "HATILLO PALMA", center: [
                            {name: "EN EL PARQUE"},
                            {name: "AYUNTAMIENTO"},
                            {name: "EN EL CLUB"},
                        ]
                    }
                ]
            },
            {
                name: "DAJABON", municity: [
                    {
                        name: "DAJABON", center: [
                            {name: "CENTRO DE MADRE CRISTO RESUCITADO"},
                            {name: "CENTRO DE MADRE LA ALTAGRACIA"},
                            {name: "CENTRO DE MADRE LA ESPERANZA"},
                            {name: "CANCHA CLUB CULTURAL LIBERACIÓN JUVENIL"},
                            {name: "ASILO DE ANCIANOS DAJABÓN"},
                            {name: "CLUB RAFAEL SOCIAS"},
                            {name: "CENTRO DE MADRE LOS MICHES"},
                            {name: "CENTRO DE MADRE HERMANA MIRABAL"},
                            {name: "POLI DEPORTIVO AMBROSIO ESTÉVEZ"}
                        ]
                    },
                ]
            },
            {
                name: "MONSEÑOR NOUEL", municity: [
                    {name: "LOS QUEMADOS", center: [{name: "DISTRITO MUNICIPAL LOS QUEMADOS"}]},
                    {name: "JUMA BEJUCAL", center: [{name: "DISTRITO MUNICIPAL JUMA BEJUCAL"}]},
                    {name: "SONADOR", center: [{name: "DISTRITO MUNICIPAL SONADOR"}]},
                    {
                        name: "PIEDRA BLANCA", center: [
                            {name: "HOSPITAL MUNICIPAL PIEDRA BLANCA"},
                            {name: "UNAP JUAN ADRIAN"}
                        ]
                    },
                    {
                        name: "BONAO", center: [
                            {name: "UNAP BONAITO"},
                            {name: "CLUB LOS AMAPOLOS"},
                            {name: "CENTRO ZONA PROSPERIDAD"},
                            {name: "UNAP MAXIMO GOMEZ"},
                            {name: "UNAP SAN PEDRO Y SAN PABLO"},
                            {name: "HOSPITAL DR. JOSE A. COLUMNA"},
                            {name: "UNAP SABANA DEL PUERTO"},
                        ]
                    },
                    {name: "JAYACO", center: [{name: "UNAP JAYACO"}]}
                ]
            },
            {
                name: "LA VEGA", municity: [
                    {
                        name: "LA VEGA", center: [
                            {name: "HOSPITAL MORILO KING"},
                            {name: "HOSPITAL DRA.ARMIDA GARCIA"},
                            {name: "CLÍNICA CEMEVE"},
                            {name: "CLÍNICA BAEZ SOTO"},
                            {name: "POLICLINICO LA VEGA"},
                            {name: "DIRECCIÓN DE AREA"},
                            {name: "SERVICIO REGIONAL DE SALUD"},
                            {name: "DIRECCIÓN PROVINCIAL DE SALUD"}
                        ]
                    },
                    {
                        name: "EL PINO", center: [
                            {name: "HOSPITAL PROFESOR JUAN BOSCH"}
                        ]
                    },
                    {
                        name: "RIO VERDE ARRIBA", center: [
                            {name: "HOSPITAL JUAN ANT.CASTILLO"}
                        ]
                    },
                    {
                        name: "JIMA ABAJO", center: [
                            {name: "HISPITAL JIMA ABAJO"}
                        ]
                    }
                ]
            },
            {
                name: "SANCHEZ RAMIREZ", municity: [
                    {
                        name: "COTUI", center: [
                            {name: "ASEUCO"},
                            {name: "CASA DEL ESPIRITU SANTO"},
                            {name: "GOBERNACION PROVINCIAL"},
                            {name: "PLAZA ARTESANAL"},
                            {name: "CLUB DEL COLEGIO MEDICO"},
                            {name: "CLUB RUDECINDO SALCEDO"},
                            {name: "CASA DEL PRM"},
                            {name: "INFOTEP"},
                            {name: "LA GRAN ARENA"},
                            {name: "INDOTEL"},
                            {name: "BAJO TECHO"},
                            {name: "PARQUE DE LA ESPERANZA"},
                            {name: "CAPILLA DE VISTA DEL VALLE"},
                            {name: "ZONA FRANCA"},
                            {name: "DEFENZA CIVIL"},
                            {name: "POLITECNICO INMACULADA CONCEPCION"},
                            {name: "IGLESIA EVANGELICA ROCA VIVA"},
                            {name: "AYUNTAMIENTO DE QUITA SUEÑO"},
                            {name: "CLUB DE QUITA SUEÑO"},
                            {name: "CLUB LAS CRUCES"},
                            {name: "AYUNTAMIENTO DE COTUI"},
                            {name: "CLUB DE AMAS DE CASA"},
                            {name: "CLUB DE BOXEO HICACO"},
                            {name: "INSTITUTO AGRARIO DOMINICANO (IAD)"},
                            {name: "PARQUE DUARTE"},
                        ]
                    },
                    {
                        name: "LA MATA", center: [
                            {name: "HOSPITAL DE VILLA LA MATA"},
                            {name: "CENTRO DE DIAGNOSTICO"},
                            {name: "CPN VILLA LA MATA"},
                        ]
                    },
                    {
                        name: "FANTINO", center: [
                            {name: "HOSPITAL SIGIFREDO ALBA DOMINGUEZ"},
                            {name: "BAJO TECHO"},
                            {name: "CLUB 4 DE JULIO"},
                            {name: "CENTRO DE DIAGNOSTICO"},
                        ]
                    },
                    {
                        name: "CEVICOS", center: [
                            {name: "HOSPITAL VIEJO"},
                            {name: "UNAP"},
                            {name: "CLUB ICELSA MERCEDES BADIA"},
                        ]
                    }
                ]
            }
        ],
    },
    methods: {
        provinceChange: function () {
            this.municitySelected = [];
        }
    }
});
