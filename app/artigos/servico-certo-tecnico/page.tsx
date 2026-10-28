import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ZoomableImage from '@/components/ZoomableImage'

export const metadata: Metadata = {
  title: 'Serviço Certo — visão técnica: arquitetura e decisões de engenharia',
  description:
    'Monorepo, Clean Architecture, multi-tenancy, autenticação e modelo de dados do Serviço Certo, sistema open source de ordens de serviço.',
}

export default function ServicoCertoTechnicalArticle() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Cabeçalho */}
          <header className="border-l-[3px] border-mel pl-5 mb-12">
            <a
              href="/artigos/servico-certo"
              className="inline-block text-sm text-gray-400 hover:text-mel transition-colors duration-200 mb-4"
            >
              ← Serviço Certo
            </a>

            <h1 className="font-titulo text-3xl sm:text-4xl font-bold text-gray-100 leading-tight">
              Serviço Certo: visão técnica
            </h1>

            <p className="text-gray-400 mt-4 text-lg">
              Arquitetura, modelo de dados e decisões de engenharia por trás do
              sistema de ordens de serviço.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6 text-sm text-gray-500">
              <span>Kawan Araújo</span>
              <span aria-hidden="true">·</span>
              <time dateTime="2026-10-28">28 de outubro de 2026</time>
              <span aria-hidden="true">·</span>
              <span>8 min de leitura</span>
            </div>
          </header>

          <figure className="mb-12">
            <ZoomableImage
              src="/artigos/servico-certo/capa-tecnico.svg"
              alt="Capa do artigo técnico sobre o Serviço Certo"
              width={1600}
              height={900}
              className="w-full h-auto rounded-xl border border-favo"
            />
            <figcaption className="text-sm text-gray-500 mt-3 text-center">
              Como o Serviço Certo é construído por dentro.
            </figcaption>
          </figure>

          {/* Conteúdo */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              O Serviço Certo é um sistema de ordens de serviço para pequenos
              negócios. A API é construída em NestJS, a interface em Next.js, e
              os dois compartilham contratos de dados no mesmo monorepo.
            </p>

            <p>
              Este artigo detalha a arquitetura, o modelo de dados, a
              autenticação e as decisões de engenharia que sustentam o produto.
              A visão funcional e o fluxo de uso estão no{' '}
              <a
                href="/artigos/servico-certo"
                className="text-mel hover:underline"
              >
                artigo principal
              </a>
              .
            </p>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Stack
            </h2>

            <ul className="list-disc list-inside space-y-3 marker:text-mel pl-2">
              <li>
                <strong className="text-gray-100">Frontend</strong> — Next.js 16
                (App Router), React 19, Tailwind CSS v4 e shadcn/ui.
              </li>
              <li>
                <strong className="text-gray-100">Backend</strong> — NestJS 12
                (ESM), TypeScript e API REST versionada em{' '}
                <code className="text-mel">/v1</code>.
              </li>
              <li>
                <strong className="text-gray-100">Banco</strong> — Knex 3, com
                SQLite no ambiente local e PostgreSQL em produção.
              </li>
              <li>
                <strong className="text-gray-100">Contratos</strong> — schemas
                Zod compartilhados entre API e web.
              </li>
              <li>
                <strong className="text-gray-100">Monorepo</strong> — pnpm
                workspaces e Turborepo.
              </li>
              <li>
                <strong className="text-gray-100">Autenticação</strong> — JWT
                com{' '}
                <a
                  href="https://www.npmjs.com/package/jose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mel hover:underline"
                >
                  <code>jose</code>
                </a>
                , hash de senha com argon2id e refresh token em cookie{' '}
                <code className="text-mel">httpOnly</code>.
              </li>
              <li>
                <strong className="text-gray-100">Qualidade</strong> — Vitest
                nos testes unitários e e2e, ESLint em flat config e Prettier.
              </li>
            </ul>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Monorepo e contratos compartilhados
            </h2>

            <p>
              O repositório reúne a aplicação web, a API e os pacotes
              compartilhados. O pacote de contratos concentra os schemas Zod
              usados pelos dois lados: o mesmo contrato que valida uma
              requisição na API tipa o formulário no frontend. A divergência
              entre cliente e servidor deixa de ser um erro de runtime e passa
              a ser um erro de compilação.
            </p>

            <figure className="my-10">
              <ZoomableImage
                src="/artigos/servico-certo/arquitetura.svg"
                alt="Diagrama da arquitetura: web em Next.js, pacote de contratos com Zod, API NestJS e banco SQLite no ambiente local ou PostgreSQL em produção"
                width={1600}
                height={700}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-favo"
              />
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                Web, contratos, API e banco no mesmo repositório.
              </figcaption>
            </figure>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Clean Architecture em um monolito modular
            </h2>

            <p>
              A API é um monolito modular organizado em contextos de negócio:{' '}
              <code className="text-mel">identity</code>,{' '}
              <code className="text-mel">customers</code>,{' '}
              <code className="text-mel">products</code>,{' '}
              <code className="text-mel">services</code> e{' '}
              <code className="text-mel">service-orders</code>. Cada contexto
              segue o mesmo layout de quatro camadas.
            </p>

            <figure className="my-10">
              <ZoomableImage
                src="/artigos/servico-certo/camadas.svg"
                alt="Camadas da Clean Architecture: presentation e infrastructure dependem de application, que depende de domain"
                width={1600}
                height={900}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-favo"
              />
              <figcaption className="text-sm text-gray-500 mt-3 text-center">
                Regra de dependência: presentation e infrastructure apontam para
                dentro.
              </figcaption>
            </figure>

            <ul className="list-disc list-inside space-y-3 marker:text-mel pl-2">
              <li>
                <code className="text-mel">domain</code> — entidades, value
                objects, erros e interfaces de repositório, em TypeScript puro.
              </li>
              <li>
                <code className="text-mel">application</code> — casos de uso,
                queries e ports.
              </li>
              <li>
                <code className="text-mel">infrastructure</code> — persistência
                com Knex, geração de PDF e demais adaptadores.
              </li>
              <li>
                <code className="text-mel">presentation</code> — controllers,
                DTOs e presenters HTTP.
              </li>
            </ul>

            <p>
              O domínio não importa NestJS, Knex ou qualquer detalhe externo. A
              composição das dependências acontece apenas no arquivo{' '}
              <code className="text-mel">.module.ts</code> de cada contexto.
              Isso permite testar as regras de negócio sem subir banco ou
              servidor.
            </p>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Modelo de dados
            </h2>

            <h3 className="font-titulo text-xl font-bold text-gray-100 pt-4">
              Multi-tenancy
            </h3>

            <p>
              Toda entidade carrega o tenant, e toda consulta é filtrada por
              ele. O isolamento entre negócios é parte do modelo desde a
              primeira migration, não uma camada adicionada depois.
            </p>

            <h3 className="font-titulo text-xl font-bold text-gray-100 pt-4">
              Preço em centavos
            </h3>

            <p>
              Valores monetários são inteiros, em centavos, do banco à API.
              Ponto flutuante e dinheiro não combinam:{' '}
              <code className="text-mel">0.1 + 0.2</code> não é{' '}
              <code className="text-mel">0.3</code>, e um centavo perdido em um
              orçamento é um problema de confiança.
            </p>

            <h3 className="font-titulo text-xl font-bold text-gray-100 pt-4">
              Snapshot na ordem
            </h3>

            <p>
              Quando um produto ou serviço entra em uma ordem, o nome e o preço
              praticado são congelados na própria ordem. Renomear o item no
              catálogo ou alterar a tabela de preços não modifica ordens
              antigas. O criador da ordem também é registrado como snapshot de
              nome e e-mail.
            </p>

            <h3 className="font-titulo text-xl font-bold text-gray-100 pt-4">
              Protocolo sequencial
            </h3>

            <p>
              Cada tenant tem sua própria sequência, iniciada em{' '}
              <strong className="text-gray-100">100001</strong> e controlada por
              uma tabela de contadores. O protocolo é gerado no servidor, nunca
              editável, e identifica a ordem no comprovante sem expor o ID
              interno.
            </p>

            <h3 className="font-titulo text-xl font-bold text-gray-100 pt-4">
              Soft delete
            </h3>

            <p>
              Clientes, produtos, serviços e ordens recebem{' '}
              <code className="text-mel">deleted_at</code> em vez de serem
              removidos. O registro sai das consultas, mas permanece no banco
              para preservar o histórico das ordens.
            </p>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Autenticação e segurança
            </h2>

            <p>
              O cadastro cria um tenant e a primeira conta. O login resolve o
              negócio pelo slug do tenant, combinado com e-mail e senha. As
              senhas são armazenadas com argon2id.
            </p>

            <ul className="list-disc list-inside space-y-3 marker:text-mel pl-2">
              <li>
                Access token JWT com validade de 15 minutos, retornado no corpo
                da resposta.
              </li>
              <li>
                Refresh token opaco em cookie{' '}
                <code className="text-mel">httpOnly</code>, com rotação a cada
                uso e detecção de reuso.
              </li>
              <li>
                Reset de senha com token de uso único, válido por 30 minutos e
                armazenado apenas como SHA-256.
              </li>
              <li>
                Rate limit de 3 tentativas por 15 minutos por IP na solicitação
                de reset.
              </li>
              <li>E-mail único por tenant e bloqueio de conta por status.</li>
              <li>
                IDs públicos com prefixo (<code className="text-mel">cus_</code>,{' '}
                <code className="text-mel">prd_</code>,{' '}
                <code className="text-mel">ord_</code>) na borda HTTP; UUIDv7
                puro no banco.
              </li>
            </ul>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Qualidade e operação
            </h2>

            <p>
              As regras de domínio e os casos de uso têm testes unitários; os
              fluxos HTTP são cobertos por testes e2e com Supertest. As mesmas
              migrations rodam em SQLite e PostgreSQL, e o repositório inclui um
              seed de demonstração com dados de uma oficina fictícia para
              exercitar a aplicação em escala realista.
            </p>

            <p>
              A API expõe documentação Swagger e health check, o que facilita a
              inspeção dos endpoints durante o desenvolvimento e a verificação
              de disponibilidade em produção.
            </p>

            <p>
              O processo adota uma visão pragmática sobre o uso de IA no
              desenvolvimento: velocidade sem qualidade gera dívida técnica;
              qualidade sem velocidade não sustenta a entrega.
            </p>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Próximos módulos
            </h2>

            <p>
              As próximas entregas são controle de estoque e movimentações,
              emissão de nota fiscal e permissões por papel. Cada uma segue o
              mesmo layout de contexto, com domínio isolado, casos de uso
              explícitos e contratos compartilhados.
            </p>

            <h2 className="font-titulo text-2xl font-bold text-gray-100 pt-6 border-l-[3px] border-mel pl-4">
              Repositório
            </h2>

            <p>
              O código está disponível no GitHub, com as instruções de execução,
              as migrations e o seed de demonstração. Sugestões, correções e
              relatos de problemas podem ser enviados pelas issues.
            </p>

            <div className="flex flex-wrap gap-3 pt-6">
              <a
                href="https://github.com/K4w4n/servico-certo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-mel px-5 py-3 font-titulo text-sm font-bold text-colmeia hover:bg-polen transition-colors duration-200"
              >
                Ver no GitHub
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="/artigos/servico-certo"
                className="inline-flex items-center gap-2 rounded-lg border border-mel px-5 py-3 font-titulo text-sm font-bold text-mel hover:bg-mel hover:text-colmeia transition-colors duration-200"
              >
                Ler a visão do produto
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
