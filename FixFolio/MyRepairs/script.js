/* flip card */

document.addEventListener('DOMContentLoaded', () => {
    initFilters();
});

function flipCard(button) {
    const productCard = button.closest('.product-card');
    productCard.classList.toggle('flipped');
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

// loading everything in:
readTextFile("../localdb.json", function(text){
    data = JSON.parse(text);

    var mainbox = document.getElementById("grid");

    var devstat = document.getElementById("devstat");
    devstat.textContent = data.repairs.length;

    // incarca tot
    for(var i = 0; i < data.repairs.length; i++){

        // creaza cutie support
        var cutie = document.createElement("div");
        cutie.className = "product-card";
        mainbox.appendChild(cutie);

        // adauga restu de script
        cutie.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div>
                        <img src="${data.repairs[i].image1}" class="product-image"></img>
                        <h3 class="device-name">${data.repairs[i].name}</h3>
                    </div>
                    <button class="product-button" onclick="flipCard(this)">See Final Result</button>
                </div>
                <div class="card-back">
                    <div>
                        <img src="${data.repairs[i].image2}" class="product-image"></img>
                        <h3 class="device-name">${data.repairs[i].name}</h3>
                    </div>
                    <button class="product-button" onclick="flipCard(this)">See Before</button>
                </div>
            </div>
        `;
    }
});

/* make the filter work */
async function initFilters() {
    const response = await fetch('../localdb.json');
    const data = await response.json();
    
    const filterButtons = document.querySelectorAll('.filterrr');
    const sortIndexButton = document.querySelector('.sort-index-btn');
    const repairCards = Array.from(document.querySelectorAll('.product-card'));
    const container = repairCards[0].parentElement;
    
    let currentFilter = 'all';
    let sortAscending = true;
    
    function applyFilter() {
        repairCards.forEach((card, index) => {
            const itemData = data.repairs[index];
            const category = itemData?.category?.toLowerCase();
            
            let shouldShow = currentFilter === 'all' || category === currentFilter;
            
            if (shouldShow) {
                card.style.display = 'block';
                // Force animation restart
                card.style.animation = 'none';
                card.offsetHeight;
                card.style.animation = 'slideInLeft 0.3s ease-out 0.2s both';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    function sortByIndex() {
        const visibleCards = [];
        repairCards.forEach((card, index) => {
            if (card.style.display !== 'none') {
                visibleCards.push({ card, originalIndex: index });
            }
        });
        
        // Sort by original index
        if (sortAscending) {
            visibleCards.sort((a, b) => a.originalIndex - b.originalIndex);
        } else {
            visibleCards.sort((a, b) => b.originalIndex - a.originalIndex);
        }
        
        visibleCards.forEach(item => {
            item.card.remove();
        });
        
        visibleCards.forEach(item => {
            container.appendChild(item.card);
        });
    }
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentFilter = btn.textContent.toLowerCase();
            console.log('Filter:', currentFilter);
            
            applyFilter();
        });
    });
    
    if (sortIndexButton) {
        sortIndexButton.addEventListener('click', () => {
            sortAscending = !sortAscending;

            sortIcon = document.getElementById("sortIcon");
            
            sortIcon.innerHTML = sortAscending ? 
                `<svg viewBox="0 0 24 24">
                    <path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83z"/>
                    <path d="M12 18.17L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" opacity="0.4"/>
                </svg>` :
                `<svg viewBox="0 0 24 24">
                    <path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83z" opacity="0.4"/>
                    <path d="M12 18.17L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/>
                </svg>`;
            sortIndexButton.classList.toggle('active');
            
            sortByIndex();
        });
    }
}