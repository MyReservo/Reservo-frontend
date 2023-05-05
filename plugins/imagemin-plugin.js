// import imageminMozjpeg from 'imagemin-mozjpeg';
// import imageminPngquant from 'imagemin-pngquant';
// import imageminGifsicle from 'imagemin-gifsicle';

// export function imageminPlugin() {
//   return {
//     name: 'imagemin',
//     async transform(_, id) {
//       if (/\.(png|jpe?g|gif)$/i.test(id)) {
//         const buffer = await optimize(await this.load(id), {
//           plugins: [
//             imageminMozjpeg(),
//             imageminPngquant({
//               quality: [0.6, 0.8],
//             }),
//             imageminGifsicle(),
//           ],
//         });

//         return {
//           code: `export default ${JSON.stringify(buffer.toString('base64'))}`,
//           map: null,
//         };
//       }
//     },
//   };
// }
