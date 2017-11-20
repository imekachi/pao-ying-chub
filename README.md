#Install Intructions

1. ลง node https://nodejs.org/dist/v9.2.0/node-v9.2.0.pkg
2. แก้ npm permission โดยรัน
 sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
2. npm i -g yarn
3. cd {path folder ที่ clone}
4. yarn
แล้วรอลงจนเสร็จ