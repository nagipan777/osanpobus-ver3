/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request) {
	  const url = "https://script.google.com/macros/s/AKfycbxLo_k1O-b2SrwDuoiME65VQKs7xoEIpOrpLpZ3OZigV7q2FuCYvR-XOcUGoDFszS5MYg/exec";
	  const response = await fetch(url, {
		method: request.method,
		headers: {
		  "Content-Type": "application/json",
		  "Access-Control-Allow-Origin": "*"
		}
	  });
	  return response;
	}
  };
