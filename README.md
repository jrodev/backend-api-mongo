

# INSTALACIONES PREVIAS

# Dependencias de la Aplicacion
# -----------------------------
# express: Para usar el framework para Node
# bcryptjs: para encriptar contraseñas
# cors: Modulo para el tema de Dominio Cruzado cuando el App cliente esta en otra IP.
# dotenv: Para el trabajo con variables de entorno
# jsonwebtoken: Modulo para el trabajo de Autenticacion por Token
# mongoose: Modulo para conectar con MongoDB
# helmet: Para la seguridad de la informacion de la aplicacion (ocultar versiones del servidor)
# morgan: Para ver las consultas y datos que se envian al servidor
npm install express bcryptjs cors dotenv jsonwebtoken mongoose morgan 

# Dependencia de DESARROLLO -D
# ----------------------------
# @babel/cli @babel/core @babel/node @babel/preset-env : Para trabajar con la version de ES6
# nodemon : Para recompilar proyecto por cada cambio en las fuentes
npm install @babel/cli @babel/core @babel/node @babel/preset-env -D

# Variables de Entorno
PORT, valor por defecto: 3000
MONGODB_URI, valor por defecto: MONGODB URI
