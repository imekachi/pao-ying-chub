#Install Intructions

1. ลง node https://nodejs.org/dist/v9.2.0/node-v9.2.0.pkg
2. แก้ npm permission โดยรัน
 sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
2. npm i -g yarn
3. cd {path folder ที่ clone}
4. yarn
แล้วรอลงจนเสร็จ


#Production

1. แก้พวก meta og:url, image อะไรพวกนี้
2. แก้ app facebook id ที่ sdk
3. src/App.js แก้ url share
4. แก้ยิงข้อมูลที่ util/facebook.js, login