
    function portaMisteriosa() {

        alert('você entrou em uma sala escura, com uma aura sombria...')
        alert('Nesta sala havia um bau sombrio e nesse bau havia 3 itens...')

        escolhaItem = prompt('Escolha qual o item que você gostaria de possuir: \n1 - Lâmina envolta em sombras, com um poder sombrio. \n2 - Armadura envolta em trevas, imbuída de uma proteção maldita. \n3 - Elixir de vida, pulsando com uma essência obscura ')

        while (escolhaItem < 1 || escolhaItem > 3) {
            escolhaItem = prompt('Escolha qual o item que você gostaria de possuir: \n1 - Lâmina envolta em sombras, com um poder sombrio. \n2 - Armadura envolta em trevas, imbuída de uma proteção maldita. \n3 - Elixir de vida, pulsando com uma essência obscura ')
        }

        alert('Ao escolher o item, o baú se fechou com um estalo sinistro, e, apesar de seus esforços, você não consegue reabri-lo para alcançar o restante dos tesouros que ele guarda. ')

        item = escolhaItem

        if (item == '1') {
            atkjogador = atkjogador + 5
            alert('Ao empunhá-la, sente o peso e a força da lâmina, pronta para desferir golpes com precisão mortal.')
            alert("Você sente sua força aumentando\n\nAtaque:" + atkjogador + "\ndefesa:" + defjogador + "\nvida:" + vidajogador + "\nouro:" + ouro)
        }
        else if (item == '2') {
            defjogador = defjogador + 5
            alert("Você a veste, e uma sensação de proteção sombria se infiltra em seus ossos, infundindo-o com uma confiança aterradora.")
            alert("Você sente sua defesa aos ataques aumentando\n\nAtaque:" + atkjogador + "\ndefesa:" + defjogador + "\nvida:" + vidajogador + "\nouro:" + ouro)
        }
        else if (item == '3') {
            vidajogador = vidajogador + 10
            alert("Ao beber o elixir, a essência da própria vitalidade se restaura, enquanto uma sensação de frieza e renovação se espalha por suas veias.")
            alert("Você sente sua vida aumentando\n\nAtaque: " + atkjogador + "\ndefesa: " + defjogador + "\nvida: " + vidajogador + "\nouro: " + ouro)
        }

        corredorEscuro()
    }

    atkmali = 20
    defmali = 10
    vidamali = 25

    function corredorEscuro() {
        alert('Enquanto você avança pelo corredor sombrio, um arrepio percorre sua espinha. À frente, emergindo das sombras, está Maliketh, o Devorador das Sombras. Sua presença imponente e silenciosa exala um poder aterrador. Com olhos que parecem absorver a luz ao seu redor, ele se aproxima com uma aura de desolação. Prepare-se: enfrentar Maliketh não é apenas uma batalha, é um confronto com o próprio terror.')

        alert("Estes são os status do sombrio e devastador Maliketh\n\nAtaque: " + atkmali + "\nDefesa: " + defmali + "\nVida: " + vidamali)
    }


    let nome = ''
    let atkjogador = 20
    let defjogador = 10
    let vidajogador = 30
    let ouro = 0

    nome = prompt('Olá jovem guerreiro, me diga, qual é o seu nome?')
    alert(nome + ' Seja bem vindo a dungeon do poderoso Starscourge Radahn!')

    escolha = prompt(' Você caiu em um buraco profundo e, ao se levantar, se deparou com uma escolha macabra diante de você. \n1- entrar pela porta apodrecida. \n2- morrer de fome e virar comida para as pragas malditas. ')

    while (escolha < '1' || escolha > '2'){
        escolha = prompt(' Você caiu em um buraco profundo e, ao se levantar, se deparou com uma escolha macabra diante de você. \n1- entrar pela porta apodrecida. \n2- morrer de fome e virar comida para as pragas malditas. ')
    }

   
   
    if (escolha == '2') {
        alert('Você morreu, fracassado...')
        fim()
    }

    if (escolha == '1') {
        portaMisteriosa()
    }

    atkmali = 20
    defmali = 10
    vidamali = 25

    while (vidamali > 0 || vidajogador > 0) {

        danojogador = atkjogador - defmali
        if (danojogador > 0) {
            vidamali = vidamali - danojogador
            alert(nome + " deu " + danojogador + " de dano no maliketh")
        }

        if (vidamali <= 0) {
            alert("Parabéns, " + nome + ". Você derrotou o Sombrio Maliketh!");
            ouro += 100
            alert(nome + " ganhou 100 Moedas de ouro!");
            alert("Seus status atuais: \nataque: " + atkjogador + "\ndefesa: " + defjogador + "\nvida: " + vidajogador + "\nouro: " + ouro);
            break;
        }
        danomali = atkmali - defjogador
        if (danomali > 0) {
            vidajogador = vidajogador - danomali
            alert("Maliketh deu " + danomali + " de dano no " + nome)
        }
        else {
            alert("Maliketh não conseguiu dar dano no " + nome)
        }
        if (vidajogador <= 0) {
            alert("Infelizmente, " + nome + "você foi derrotado pelo grandioso maliketh!");
            break;
        }
    }

    atkmalenia = 25
    defmalenia = 10
    vidamalenia = 35

    alert("Ao derrotar o Maliketh, " + nome + " abriu uma porta que leva a uma nova fase de sua jornada.  E Ao andar pelo corredor achou uma sala subsequente, observou uma leve sensação de que algo suspeito pode estar presente, indicando a possível presença de uma armadilha, ou não...")

    escolhaItem = prompt(nome + " encontrou um novo item importante \n1 - Elixir da vida suspeito")

    while (escolhaItem < 1 || escolhaItem > 1) {
        escolhaItem = prompt("Você encontrou a sua salvação! \n1 - Elixir da vida")
    }

    alert('Ao ingerir o item, o baú se fechou com um estalo sinistro.')

    item = escolhaItem

    if (item == '1') {
        vidajogador = vidajogador + 20 //fiquei com 40 de vida mesmo pegando qualquer um dos 3 itens
        alert("Você ingeriu o elixir da vida, aumentando sua vida total!")
        alert("Você se sente mais forte depois de ingerir o elixir! \n\nAtaque:" + atkjogador + "\ndefesa:" + defjogador + "\nvida:" + vidajogador + "\nouro:" + ouro)
    }
    alert("Ao sair da sala misteriosa e avançar um pouco mais, " + nome + " se depara com uma criatura de aparência misteriosa, e o ambiente é permeado por uma sensação de sede de sangue...")
    alert("Um arrepio percorre sua espinha. À frente, emergindo das sombras, está Malenia, a Lâmina da Ruína. Sua presença imponente e silenciosa exala uma ameaça esmagadora. Com olhos que parecem devorar toda a luz ao seu redor, ela se aproxima com uma aura de destruição iminente. Prepare-se: enfrentar Malenia não é apenas uma batalha, é um confronto com a própria desolação.")

    alert("Estes são os status da silenciosa e devastadora Malenia! \n\nAtaque: " + atkmalenia + "\nDefesa: " + defmalenia + "\nVida: " + vidamalenia)

    atkmalenia = 25
    defmalenia = 10
    vidamalenia = 35

    while (vidamalenia > 0 || vidajogador > 0) {

        danojogador = atkjogador - defmalenia
        if (danojogador > 0) {
            vidamalenia = vidamalenia - danojogador
            alert(nome + " deu " + danojogador + " de dano na Malenia")
        }

        if (vidamalenia <= 0) {
            alert("Parabéns, " + nome + ". Você derrotou a silenciosa malenia!");
            ouro += 100
            alert(nome + " ganhou 100 Moedas de ouro!");
            alert("Seus status atuais: \nataque: " + atkjogador + "\ndefesa: " + defjogador + "\nvida: " + vidajogador + "\nouro: " + ouro);
            break;
        }
        danomalenia = atkmalenia - defjogador
        if (danomali > 0) {
            vidajogador = vidajogador - danomalenia
            alert("Malenia deu " + danomalenia + " de dano no " + nome)
        }
        else {
            alert("Malenia não conseguiu dar dano no " + nome)
        }
        if (vidajogador <= 0) {
            alert("Infelizmente, " + nome + "você foi derrotado pela grandiosa malenia!");
            break;
        }
    }

    atkradahn = 40
    defradahn = 40
    vidaradahn = 75


    alert("Ao derrotar a grandiosa malenia," + nome + " encontrou uma porta aberta ao fundo do corredor, com um som resoando do outro lado...")
    alert("Ao entrar pela porta, " + nome + " encontra um amigável vendedor com a sua loja...")

    escolhaItem = prompt('Vendedor: "Se você quer sobreviver ao chefe, compre este item sem pensar duas vezes. \n1 - Elixir do universo')

    while (escolhaItem < 1 || escolhaItem > 1) {
        escolhaItem = prompt('Vendedor: "Se você quer sobreviver ao chefe, compre este item sem pensar duas vezes. \n1 - Elixir do universo')
    }

    item = escolhaItem

    if (item == '1') {
        vidajogador = vidajogador + 35
        atkjogador = atkjogador + 30
        defjogador = defjogador + 20
        ouro = ouro - 200
        alert('o elixir do universo foi a salvação para a joranda.')
        alert("Você sente todos os seus atributos aumentando \n\nAtaque:" + atkjogador + "\ndefesa:" + defjogador + "\nvida:" + vidajogador + "\nouro:" + ouro)
    }


    alert("Após explorar a loja do vendedor, ele menciona um grandioso chefe da caverna, uma entidade tão formidável que não foi sequer relatada por outro guerreiro nos últimos 10000 anos...")
    alert("O vendedor te disse sobre o caminho até a sala do grandioso chefe, e se despediu de você logo após chegar no limite seguro da sala...")

    alert("Ao se aproximar, prepare-se para enfrentar Radahn, o Conquistador das Sombras. Sua presença é envolta em um manto de terror indescritível, e os rumores falam de um poder tão devastador que até mesmo os guerreiros mais audaciosos tremem ao mencioná-lo. Sua chegada é precedida por um sentimento de apavoro profundo, como se a própria escuridão o acompanhasse. Não subestime este encontro, pois Radahn não é apenas um chefe, mas um pesadelo personificado que se esconde nas sombras.")

    atkradahn = 40
    defradahn = 40
    vidaradahn = 75

    while (vidaradahn > 0 || vidajogador > 0) {

        danojogador = atkjogador - defradahn
        if (danojogador > 0) {
            vidaradahn = vidaradahn - danojogador
            alert(nome + " deu " + danojogador + " de dano no Radahn")
        }

        if (vidaradahn <= 0) {
            alert("Parabéns, " + nome + ". Você derrotou o chefe dos mortos, Radahn!")
            ouro += 10.000
            alert(nome + " ganhou 10.000 Moedas de ouro!");
            alert("Seus status atuais: \n\nAtaque:" + atkjogador + "\ndefesa:" + defjogador + "\nvida:" + vidajogador + "\nouro:" + ouro)
            break
        }
        danoradahn = atkradahn - defjogador
        if (danoradahn > 0) {
            vidajogador = vidajogador - danoradahn
            alert("Radahn deu " + danoradahn + " de dano no " + nome)
        }
        else {
            alert("Radahn não conseguiu dar dano no " + nome)
        }
        if (vidajogador <= 0) {
            alert("Infelizmente, " + nome + "você foi derrotado pelo chefe Radahn!");
            break;
        }
    }
            alert ("O guerreiro " + nome + " O guerreiro venceu o temido chefe Radahn e conseguiu escapar para a superfície, desafiando as trevas da caverna. Ao emergir, encontrou a luz e a liberdade, mas o eco das sombras ainda sussurra, lembrando-o das profundezas que ele conquistou. Que sua jornada nos lembre que, mesmo após a vitória, os medos do passado podem sempre espreitar à espreita, mas a esperança é o que nos guia para a luz...")
            alert ("fim.")
