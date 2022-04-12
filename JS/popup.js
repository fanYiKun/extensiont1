async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

document.getElementById('addButton').addEventListener('click', async () => {
  var xxx = document.getElementById('input1').value;
  chrome.storage.sync.set({ "xxx": xxx });

  let tab = await getCurrentTab();
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['JS/add.js']
  });
});


document.getElementById('removeButton').addEventListener('click',async () => {
  let tab = await getCurrentTab();
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: remove
    //files: ['JS/remove.js']
  });
});

function remove(){
  var divA = document.getElementById("divA");
  if (divA) {
      divA.parentNode.removeChild(divA);
  }
  var divB = document.getElementById("divB");
  if (divB) {
      divB.parentNode.removeChild(divB);
  }
}



