import json

from fastapi import APIRouter

from api.schema import FundGraphResponse, ChainId, FundGraphEdge, ChainAddress
from api.utils import try_parse_obj_as

route = APIRouter(
    prefix="/api/v1/graph",
)

@route.get("/{chain}/{address}", response_model=FundGraphResponse)
def get_address_graph(
        address: str,
        chain: ChainId,
):
    with open("data.json", "r") as file:
        data = json.load(file)

    graph_data = []
    for item in data:
        source_address = item["source"]["address"]
        dest_address = item["dest"]["address"]
        if source_address == address or dest_address == address:
            graph_data.append(item)
    edges = try_parse_obj_as(list[FundGraphEdge], graph_data)
    nodes = extract_nodes(graph_data)
    return FundGraphResponse(nodes=nodes, edges=edges)

def extract_nodes(graph_data):
    nodes = set()
    for item in graph_data:
        source_address = item["source"]["address"]
        dest_address = item["dest"]["address"]
        nodes.add(source_address)
        nodes.add(dest_address)
    return list(nodes)
