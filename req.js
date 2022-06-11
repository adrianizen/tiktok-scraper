const request = require('request');

const jCookies = request.jar();
const options = {
    jar: jCookies,
    gzip: true,
    method: 'GET',
    url:
        'https://www.tiktok.com/api/user/detail/?aid=1988&app_language=en&app_name=tiktok_web&channel=tiktok_web&device_platform=web_pc&history_len=3&uniqueId=yudhapangestu24',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
        Cookie:
            '_abck=11FF5A55808CA8B6ED7B920FF1E9F65C~-1~YAAQXP1eb+ga2TiBAQAAd7I+UgijkXWKHNx8v4Py7yxsi5Q9j1alvop06gbmeVbId4iHS6aDmB3f8OPH7KFlB+kLFU1ZE3REQ54V8h5tyAF2Kv1XeEPr3IdfYUyYb+3egvjtvmmwrRvpzmZDhDzZwzKUuJ9CLHUECvHBXiBoCcdy82DgBqijFUOm7G7I+gIaOvgfCZ/9wwXIqvJWtcivDufRMvdnxZi6NRHkjT3r9rIErTb+WqH3+o1mdtOXo/GG8MxUKxFYsg19GspqpWKPTFOAW+WvRywpXjhgAX/DiDyMxQqSM4X4a8jPRoe065TeQi7B1lGK+uvflxbmhybFwoieEoophvZ8NNFmf/b0xqcN/1qwESpwhcxV71wpAHHLkd8MrTp/Areb8g==~-1~-1~-1; ak_bmsc=0B8222CE03E749822F7F54BDDADE22B6~000000000000000000000000000000~YAAQXP1eb6IY2TiBAQAAs4gxUhAhGypQ/VZr+s0f9d6+jMJBxGrB5OfYvEnaXVvhDbrqrHLMxaDB3Mz/tcWaYb27T9z9bL+r/nD8FhDULu+L2+OsL0Umw+GBkd3xjdRyqEuQ8poppX0xb4fICfe3Tjcs3/SARAe5pfSF/+GfYJaMNOQrL4dbKCMNwICHbMGdkN6BsYnfBfGYmtab0h1vlsTuqzgWR5e7upy4APeSwYDzLbHGfyYMLmahzJS1TyV88gVQxKfZACr0oEekHs/t9R24cdUcm9XJQSX2FUCvussURtPJbBq9NlVg4+olEpNJCaKs6yKWbPO4HVIYzbhG+EbT3WlYoo28v1xRXuG2poOvNmWHCUZoLoyBAJzsk1WAnQjX2qiUiJ1i0RyQITk=; bm_mi=EF8EAC6DEA635DE03994C95BD1CC880B~YAAQXP1eb74Y2TiBAQAACuIxUhClWZ73P5oB2nIPuqokOt/cpVkS1UVJwjtNrgPAL+dDUcl8Hd/qqoedK/pqlK+zR/gDmouqIe3Ce8WoLCSqMcpiaLv/6H3SHyuZgjgYr6ESjeBhOL20iFb/ZhoYm8Mbu9MyF653dwuzV33yJzy8BkqOUDERNUlNQlOwndY/T8IgFMNruLgy3VNV+mx0IuJtc2nrldddEgBNVqzc6EOnvm3WmOlIFT5ILdxQ/oH9W8A/3sTdcWwILRePSW2KVPD1rehJk1/Lhy1tgyvSc9Y9ohdfGLkjApR1bmjtHgjYB4yQQCdsCDdyGg==~1; bm_sv=3C7569745A2F73C8A66EAE0107518370~YAAQZf1ebzT0RCmBAQAATDJQUhC0gZO5kmuNlMFL4qdOcgEYx7eaJNTx2udY+iBst7Wi/lXyF8ImipLdlfVSGvapcpEDEbNxbAwGmATIYxs6Ncxt9fMH8TSFbMgsjKiSpWGzslWrxwhblEN98oe70XBvEZ8FD4uKJLkECuEGIXGxWtmfTamXnVFtSiKVHvNWlA+DBdA/LvME+0IVuONIDB/19TSpgBp8LbnBwfOpwoMoG7JT9jYGBwpbgc2ljJe0mg==~1; bm_sz=BC4B2BDDEA362A3F03CAF44B7AE8DD90~YAAQXP1eb+oa2TiBAQAAd7I+UhAsy8cU7g0+7IUBt0TDprBUXn3Z/x+5JmtSroytJ5QfAslwEMVKAtxp/TJnHGvW3GgJGVgc8wLRHmBFMvxXjUIqhx7qt9gLQRJGjT47IrjVupF5ll2PY74q+LeY9YKxtkdxxt4ML4vFT716YKzXM/oMVf6tejC1fiM97wK35YYRMTTLEnuQVXSmXdjPXKw8hx/CA/w8g1l+84KvOfORzdeozgdZ+F1vhhK3a3R0u/Sbj4yiG913Jy4yJZS9GupJJXQ3KE1u1D3oXXyN0dwqRiQ=~3228979~4536632; msToken=Ga0UjbQX8b022Wxkp4GFmWCWyvM2V0q26RG3zUTSB-w7Mn63QSzD4RakVQox-C_Po6lb3g_t1K7obBcqCLTyEgq-5aYGUIS40ebBa_-ll2nJagMohG_lmf-qZiK0ZBwEBbvt6vSaIDasJX0=',
    },
};
request(options, function(error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
