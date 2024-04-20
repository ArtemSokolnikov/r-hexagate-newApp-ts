import json

from fastapi import APIRouter

from api.schema import FundGraphResponse, ChainId, FundGraphEdge, ChainAddress
from api.utils import try_parse_obj_as

route = APIRouter(
    prefix="/graph",
)

@route.get("/{chain}/{address}", response_model=FundGraphResponse)
def get_address_graph(
        address: str,
        chain: ChainId,
):
    # Загрузить данные из JSON-файла
    with open("data.json", "r") as file:
        data = json.load(file)

    # Фильтрация данных по переданному адресу
    graph_data = []
    for item in data:
        source_address = item["source"]["address"]
        dest_address = item["dest"]["address"]
        if source_address == address or dest_address == address:
            graph_data.append(item)

    # Преобразование данных в структуру графа
    nodes = []
    edges = []
    for item in graph_data:
        source_address = item["source"]["address"]
        dest_address = item["dest"]["address"]

        # Добавить узлы
        if source_address not in nodes:
            nodes.append(source_address)
        if dest_address not in nodes:
            nodes.append(dest_address)

        # Добавить ребра
        edges.append(FundGraphEdge(source=source_address, target=dest_address))

    return FundGraphResponse(nodes=nodes, edges=edges)
