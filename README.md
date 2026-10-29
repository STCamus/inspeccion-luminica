# Inspección lumínica en terreno · prototipo fase 1

Prototipo de aplicación web (PWA) de apoyo a la inspección en terreno bajo el D.S. N°1/2022 MMA,
elaborado en el grupo de trabajo de contaminación lumínica (DSC, SMA). Uso de prueba con datos ficticios.

- Módulos: M0 Preparación, M1 Ejecución, M2 Estaciones (GPS y zona automática), M3 Aplicabilidad, M4 Luminarias, M8 Cierre.
- Salidas: borrador de acta (.docx) y paquete de datos (.zip) con fotos, JSON y manifiesto SHA-256.
- Datos: se guardan solo en el navegador del dispositivo (IndexedDB). No hay servidor ni cuentas de usuario.
- Capas (`layers/`): APB (SNAP mayo 2026 y capas IDE MMA), planes RECOGE (SBAP), radio de 50 km y sitios astronómicos,
  simplificadas a ~30 m. Referenciales: no sustituyen los decretos ni los planos oficiales.

Publicación: GitHub Pages desde la rama `main`, carpeta raíz. Ver `LEEME.txt` para instalar en iPhone.
