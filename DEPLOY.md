# Guía de Despliegue (Publicación en Internet)

Tu portafolio profesional está listo para ser publicado. La forma más sencilla, profesional y gratuita de hacerlo es utilizando **Vercel** o **Netlify**.

## Opción Recomendada: Vercel (Rápido y Gratuito)

1.  **Crear cuenta**: Ve a [vercel.com](https://vercel.com) y regístrate (puedes usar tu cuenta de GitHub si tienes, o email).
2.  **Instalar Vercel CLI** (Opcional pero recomendado si tienes Node.js):
    Abrir terminal y ejecutar: `npm i -g vercel`
3.  **Desplegar desde Terminal**:
    En la carpeta de tu proyecto, simplemente escribe:
    ```bash
    vercel
    ```
    Sigue las instrucciones (dale "Enter" a todo básicamente).

## Opción Manual (Arrastrar y Soltar) - Netlify

1.  Ejecuta el comando de construcción en tu terminal:
    ```bash
    npm run build
    ```
    (Esto ya lo hemos verificado y funciona correctamente).
2.  Esto creará una carpeta llamada `dist` en tu proyecto.
3.  Ve a [netlify.com](https://www.netlify.com/), regístrate.
4.  En tu panel de control, verás un área para "Deploy manually".
5.  Arrastra la carpeta `dist` completa a esa área.
6.  ¡Listo! Tu sitio estará online en segundos.

## Post-Publicación

*   **Dominio Personalizado**: Tanto Vercel como Netlify te permiten conectar un dominio propio (ej: `mercedesdiazcolodrero.com`) muy fácilmente desde la configuración.
*   **Formulario de Contacto**: Recuerda conectar el formulario a un servicio real si deseas recibir los emails, o configurar tu propio backend.
