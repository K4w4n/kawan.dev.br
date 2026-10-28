import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ZoomableImage from '@/components/ZoomableImage'

export const metadata: Metadata = {
  title: 'Serviço Certo — ordens de serviço sem caderno e sem planilha',
  description:
    'Conheça o Serviço Certo, um sistema open source de ordens de serviço para pequenos negócios: funcionalidades, fluxo de atendimento e roadmap.',
}

export default function ServicoCertoArticle() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Cabeçalho */}
          <header className="border-l-[3px] border-mel pl-5 mb-12">
            <a
              href="/"
              className="inline-block text-sm text-gray-400 hover:text-mel transition-colors duration-200 mb-4"
            >
              ← Voltar
            </a>

            <h1 className="font-titulo text-3xl sm:text-4xl font-bold text-gray-100 leading-tight">
              Serviço Certo
            </h1>

            <p className="text-gray-400 mt-4 text-lg">
              Um sistema open source de ordens de serviço para pequenos
              negócios.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6 text-sm text-gray-500">
              <span>Kawan Araújo</span>
              <span aria-hidden="true">·</span>
              <time dateTime="2026-10-28">28 de outubro de 2026</time>
              <span aria-hidden="true">·</span>
              <span>7 min de leitura</span>
            </div>
          </header>

          <figure className="mb-12">
            <ZoomableImage
              src="/artigos/servico-certo/capa.svg"
              alt="Capa do artigo sobre o Serviço Certo"
              width={1600}
              height={900}
              className="w-full h-auto rounded-xl border border-favo"
            />
            <figcaption className="text-sm text-gray-500 mt-3 text-center">
              Serviço Certo: gestão de ordens de serviço para pequenos negócios.
            </figcaption>
          </figure>

          {/* Conteúdo */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Oficina mecânica, salão de beleza, assistência técnica. Negócios
              pequenos costumam ter a mesma ferramenta para registrar o que
              fazem: um caderno, uma planilha e o histórico do WhatsApp.
            </p>

            <p>
              Funciona até o dia em que o caderno some, a planilha é
              sobrescrita ou o cliente pergunta por um comprovante que ninguém
              consegue emitir. O <strong className="text-gray-100">Serviço
              Certo</strong> foi criado para resolver isso: um lugar só para
              registrar as ordens de serviço, os clientes e o catálogo do
              negócio.
            </p>

            <p>
              O Serviço Certo é um sistema open source, com os módulos
              principais funcionando de ponta a ponta. Este artigo apresenta o
              que a plataforma entrega e o roadmap de evolução. A arquitetura e
              as decisões de engenharia estão no{' '}
              <a
                href="/artigos/servico-certo-tecnico"
                className="text-mel hover:underline"
              >
                artigo técnico
              </a>
              .
            </p>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              O problema
            </h2>

            <p>
              Em um negócio pequeno, a ordem de serviço é o documento que liga
              três coisas: o cliente, o que foi feito e quanto custou. Quando
              esse registro mora em três lugares diferentes, a conta não fecha.
            </p>

            <ul className="list-disc list-inside space-y-3 marker:text-mel pl-2">
              <li>O histórico do cliente se perde entre conversas.</li>
              <li>O preço combinado não é o preço que aparece no caixa.</li>
              <li>
                O serviço é feito, mas não existe comprovante para entregar.
              </li>
            </ul>

            <p>
              Sistemas de gestão resolvem isso, mas costumam ser grandes,
              caros e cheios de telas que o negócio não usa. A proposta do Serviço
              Certo é o oposto: o essencial, bem feito.
            </p>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              O que o Serviço Certo faz
            </h2>

            <p>
              Cinco módulos estão implementados, todos multi-tenant — cada
              negócio enxerga apenas os próprios dados:
            </p>

            <ul className="list-disc list-inside space-y-3 marker:text-mel pl-2">
              <li>
                <strong className="text-gray-100">Ordens de serviço</strong> —
                protocolo numérico sequencial, cliente, produtos e serviços com
                preços praticados na hora, observação e comprovante em PDF.
              </li>
              <li>
                <strong className="text-gray-100">Clientes</strong> — cadastro
                com validação de CPF e CNPJ, endereço e telefone.
              </li>
              <li>
                <strong className="text-gray-100">Produtos</strong> — catálogo
                com descrição e preço em centavos.
              </li>
              <li>
                <strong className="text-gray-100">Serviços</strong> — a tabela
                de serviços oferecidos pelo negócio.
              </li>
              <li>
                <strong className="text-gray-100">Usuários</strong> — contas de
                acesso por negócio, com possibilidade de bloquear e
                desbloquear.
              </li>
            </ul>

            <figure className="my-10">
              <ZoomableImage
                src="/artigos/servico-certo/screens/02-dashboard.webp"
                alt="Painel do negócio do tenant de demonstração Auto Center Oficina do João, com atalhos para os módulos"
                width={1920}
                height={1200}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-favo"
              />
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                O painel do negócio, logado no tenant de demonstração.
              </figcaption>
            </figure>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Do atendimento ao comprovante
            </h2>

            <p>
              O fluxo central é simples de propósito. O cliente é cadastrado, a
              ordem é aberta com os itens do serviço e, no fim, o comprovante
              sai em PDF com os dados do negócio, o protocolo, o cliente, os
              itens, o total e quem gerou o documento.
            </p>

            <figure className="my-10">
              <ZoomableImage
                src="/artigos/servico-certo/fluxo.svg"
                alt="Fluxo em três passos: cliente, ordem de serviço com protocolo 100001 e comprovante em PDF"
                width={1600}
                height={700}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-favo"
              />
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                Cliente, ordem e comprovante: o caminho completo de uma ordem.
              </figcaption>
            </figure>

            <figure className="my-10">
              <ZoomableImage
                src="/artigos/servico-certo/screens/04-ordem-detalhe.webp"
                alt="Detalhe da ordem de serviço 100452, com dados do cliente, itens, total e botão para baixar o comprovante"
                width={1920}
                height={1200}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-favo"
              />
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                Detalhe de uma ordem: cliente, itens, observação e comprovante.
              </figcaption>
            </figure>

            <blockquote className="border-l-[3px] border-mel bg-abelha rounded-r-xl px-5 py-4 my-8">
              <p className="text-gray-200 italic">
                O comprovante não é um detalhe. É a prova de que o serviço
                existiu — e o motivo pelo qual o cliente volta.
              </p>
            </blockquote>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Por dentro do sistema
            </h2>

            <p>
              As telas abaixo são do tenant de demonstração — uma oficina
              fictícia com dados gerados para testar o sistema em escala
              realista.
            </p>

            <figure className="my-10">
              <ZoomableImage
                src="/artigos/servico-certo/screens/03-ordens.webp"
                alt="Listagem de ordens de serviço com filtros por protocolo, cliente, produto e serviço"
                width={1920}
                height={1200}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-favo"
              />
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                Ordens de serviço: protocolo, cliente, itens, total e ações.
              </figcaption>
            </figure>

            <div className="space-y-8 my-10">
              <figure>
                <ZoomableImage
                  src="/artigos/servico-certo/screens/05-clientes.webp"
                  alt="Tela de gestão de clientes com nome, documento e contato"
                  width={1920}
                  height={1200}
                  loading="lazy"
                  className="w-full h-auto rounded-xl border border-favo"
                />
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Clientes com CPF/CNPJ validados.
                </figcaption>
              </figure>

              <figure>
                <ZoomableImage
                  src="/artigos/servico-certo/screens/06-produtos.webp"
                  alt="Catálogo de produtos com descrição e preço"
                  width={1920}
                  height={1200}
                  loading="lazy"
                  className="w-full h-auto rounded-xl border border-favo"
                />
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Catálogo de produtos e preços.
                </figcaption>
              </figure>

              <figure>
                <ZoomableImage
                  src="/artigos/servico-certo/screens/07-servicos.webp"
                  alt="Tabela de serviços oferecidos pelo negócio, com preços"
                  width={1920}
                  height={1200}
                  loading="lazy"
                  className="w-full h-auto rounded-xl border border-favo"
                />
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Tabela de serviços do negócio.
                </figcaption>
              </figure>

              <figure>
                <ZoomableImage
                  src="/artigos/servico-certo/screens/08-usuarios.webp"
                  alt="Gestão de usuários com contas de acesso ao sistema"
                  width={1920}
                  height={1200}
                  loading="lazy"
                  className="w-full h-auto rounded-xl border border-favo"
                />
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Contas de acesso por negócio.
                </figcaption>
              </figure>
            </div>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Visão técnica
            </h2>

            <p>
              A arquitetura, o modelo de dados, a autenticação e as decisões de
              engenharia do Serviço Certo estão detalhados em um artigo
              separado.
            </p>

            <a
              href="/artigos/servico-certo-tecnico"
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-favo bg-abelha p-5 my-6 hover:border-mel transition-colors duration-200"
            >
              <span className="flex flex-col gap-1">
                <span className="font-titulo text-lg font-bold text-gray-100">
                  Serviço Certo: visão técnica
                </span>
                <span className="text-sm text-gray-400">
                  Monorepo, Clean Architecture, multi-tenancy e qualidade.
                </span>
              </span>
              <span className="text-mel font-titulo text-sm font-bold whitespace-nowrap group-hover:translate-x-1 transition-transform duration-200">
                Ler artigo →
              </span>
            </a>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Roadmap
            </h2>

            <p>
              As próximas entregas previstas são controle de estoque e
              movimentações, emissão de nota fiscal e permissões por papel. O
              núcleo do produto — registrar a ordem e emitir o comprovante —
              já está disponível.
            </p>

            <figure className="my-10">
              <ZoomableImage
                src="/artigos/servico-certo/modulos.svg"
                alt="Módulos prontos (ordens de serviço, clientes, produtos, serviços e usuários) e próximos passos (estoque, nota fiscal e permissões)"
                width={1600}
                height={900}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-favo"
              />
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                Módulos disponíveis e próximos passos.
              </figcaption>
            </figure>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Repositório e contribuição
            </h2>

            <p>
              O Serviço Certo é open source e o código está no GitHub. O
              repositório inclui um seed de demonstração com uma oficina
              fictícia — 120 clientes, 78 produtos, 35 serviços e mais de 450
              ordens — para testar a aplicação com dados realistas.
            </p>

            <p>
              Sugestões, correções e relatos de problemas podem ser enviados
              pelas issues do repositório.
            </p>

            <div className="pt-6">
              <a
                href="https://github.com/K4w4n/servico-certo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-mel px-5 py-3 font-titulo text-sm font-bold text-colmeia hover:bg-polen transition-colors duration-200"
              >
                Ver no GitHub
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-colmeia border-t border-favo py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            Feito com ☕ por Kawan Araújo · 2026
          </p>
        </div>
      </footer>
    </>
  )
}
