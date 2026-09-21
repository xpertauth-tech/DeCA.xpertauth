# Notas pendientes — Próxima sesión

## Contexto
Este repo (`DeCA.xpertauth`) empezó como un manual interactivo del DeCA
(desplegado en https://deca.xpertauth.com). Se auditó el contenido completo
contra el manual PDF original (todo coincide salvo una corrección ya
aplicada en Bloque 8) y se le aplicó la identidad de marca de XpertAuth
(colores Obsidian/XpertBlue/Arctic/Mist/Ember, tipografías Sora+Inter, logo).

## Idea planteada: app real de creación y archivo del DeCA
José Luis planteó pasar de "manual informativo" a una aplicación operativa
que permita a las empresas de transporte **generar y archivar el DeCA de
verdad**, cumpliendo los requisitos técnicos de la Resolución de 5-jun-2026:
formulario con los datos del art. 6, generación de PDF nativo, URL única +
QR, timestamps de creación/modificación, repositorio con conservación de
1 año, y funcionando para los dos actores (cargador contractual y
transportista efectivo).

Valoración de Claude: viable y no especialmente difícil técnicamente (todas
las piezas son patrones conocidos — formulario, generación de PDF, storage,
QR, roles con Supabase Auth). Lo único que añade complejidad real es la
firma electrónica cualificada (QES), y no es obligatoria si el DeCA se usa
solo como documento de control (caso normal) — se recomendó dejarla fuera
de una v1.

## Decisiones pendientes antes de empezar a construir
1. **¿Dónde vive el proyecto?** ¿Repo nuevo (ej. `xpertauth-tech/deca-app`)
   o seguir ampliando este mismo (`DeCA.xpertauth`)?
2. **¿Base de datos?** ¿Proyecto Supabase `xpertauth-db` compartido con la
   web, o uno nuevo dedicado solo a esta app?
3. **¿Alcance de la v1?** Recomendación: sin firma electrónica (ni AdES ni
   QES) para la primera versión.

## Infraestructura ya montada (reutilizable)
- GitHub App de Claude instalada en la organización `xpertauth-tech`.
- Vercel: proyecto `deca-xpertauth` (equipo `xpertauth-tech`) vinculado a
  este repo, deploy automático en cada push a `main`.
- Dominio `deca.xpertauth.com` verificado y con SSL activo en Vercel.
- Acceso de lectura a `xpertauthtools-blip/xpertauth_web` (repo de la web
  principal) para consultar patrones de marca, Supabase Auth, etc.
