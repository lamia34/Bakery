document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".cardproduct");
    const productsPerPage = 9; 
    let currentPage = 1; 

    function displayProducts() {
        const productContainer = document.querySelector(".products");
        productContainer.innerHTML = ""; 

        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;

        products.forEach((product, index) => {
            if (index >= startIndex && index < endIndex) {
                productContainer.appendChild(product);
            }
        });

        updatePagination();
    }

    function updatePagination() {
        document.getElementById("currentPageNumber").innerText = currentPage;

        const totalPages = Math.ceil(products.length / productsPerPage);
        document.getElementById("prevPage").disabled = currentPage === 1;
        document.getElementById("nextPage").disabled = currentPage === totalPages;
    }

    document.getElementById("prevPage").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts();
        }
    });

    document.getElementById("nextPage").addEventListener("click", () => {
        const totalPages = Math.ceil(products.length / productsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayProducts();
        }
    });

    displayProducts();
});
