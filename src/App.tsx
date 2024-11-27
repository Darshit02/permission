import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "./components/ui/select";
import { Checkbox } from "./components/ui/checkbox";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";

interface Action {
  id: number;
  label: string;
  value: string;
}

interface ModuleType {
  id: number;
  value: string;
  label: string;
  action_array: Action[];
}

interface Parent {
  master_array?: ModuleType[];
  transaction_array?: ModuleType[];
  reports_array?: ModuleType[];
}

const permissionsData = [
  {
    id: 1,
    value: "masters",
    label: "Masters",
    master_array: [
      {
        id: 2,
        value: "party_details",
        label: "Party Details",
        action_array: [
          {
            id: 3,
            value: "party_details_create",
            label: "Create",
          },
          {
            id: 4,
            value: "party_details_read",
            label: "Read",
          },
          {
            id: 5,
            value: "party_details_update",
            label: "Update",
          },
          {
            id: 6,
            value: "party_details_delete",
            label: "Delete",
          },
        ],
      },
      {
        id: 7,
        value: "commission_partnership",
        label: "Commission and Partnership",
        action_array: [
          {
            id: 8,
            value: "commission_partnership_create",
            label: "Create",
          },
          {
            id: 9,
            value: "commission_partnership_read",
            label: "Read",
          },
          {
            id: 10,
            value: "commission_partnership_update",
            label: "Update",
          },
          {
            id: 11,
            value: "commission_partnership_delete",
            label: "Delete",
          },
        ],
      },
      {
        id: 12,
        value: "group_master",
        label: "Group Master",
        action_array: [
          {
            id: 13,
            value: "group_master_create",
            label: "Create",
          },
          {
            id: 14,
            value: "group_master_read",
            label: "Read",
          },
          {
            id: 15,
            value: "group_master_update",
            label: "Update",
          },
          {
            id: 16,
            value: "group_master_delete",
            label: "Delete",
          },
        ],
      },
      {
        id: 17,
        value: "id_master",
        label: "ID Master",
        action_array: [
          {
            id: 18,
            value: "id_master_create",
            label: "Create",
          },
          {
            id: 19,
            value: "id_master_read",
            label: "Read",
          },
          {
            id: 20,
            value: "id_master_update",
            label: "Update",
          },
          {
            id: 21,
            value: "id_master_delete",
            label: "Delete",
          },
        ],
      },
      {
        id: 22,
        value: "id_rate",
        label: "ID Rate",
        action_array: [
          {
            id: 23,
            value: "id_rate_create",
            label: "Create",
          },
          {
            id: 24,
            value: "id_rate_read",
            label: "Read",
          },
          {
            id: 25,
            value: "id_rate_update",
            label: "Update",
          },
          {
            id: 26,
            value: "id_rate_delete",
            label: "Delete",
          },
        ],
      },
      {
        id: 27,
        value: "trade_master",
        label: "Trade Master",
        action_array: [
          {
            id: 28,
            value: "trade_master_create",
            label: "Create",
          },
          {
            id: 29,
            value: "trade_master_read",
            label: "Read",
          },
          {
            id: 30,
            value: "trade_master_update",
            label: "Update",
          },
          {
            id: 31,
            value: "trade_master_delete",
            label: "Delete",
          },
        ],
      },
    ],
  },
  {
    id: 32,
    value: "Transaction",
    label: "Transaction",
    transaction_array: [
      {
        id: 33,
        value: "Voucher_Entry",
        label: "Voucher Entry",
        action_array: [
          {
            id: 34,
            value: "Voucher_Entry.Create",
            label: "Create",
          },
          {
            id: 35,
            value: "Voucher_Entry.Read",
            label: "Read",
          },
          {
            id: 36,
            value: "Voucher_Entry.Update",
            label: "Update",
          },
          {
            id: 37,
            value: "Voucher_Entry.Delete",
            label: "Delete",
          },
        ],
      },
    ],
  },
  {
    id: 38,
    value: "Reports",
    label: "Reports",
    reports_array: [
      {
        id: 39,
        value: "General_Balance",
        label: "General Balance",
        action_array: [
          {
            id: 40,
            value: "General_Balance.Create",
            label: "Create",
          },
          {
            id: 41,
            value: "General_Balance.Read",
            label: "Read",
          },
          {
            id: 42,
            value: "General_Balance.Update",
            label: "Update",
          },
          {
            id: 43,
            value: "General_Balance.Delete",
            label: "Delete",
          },
        ],
      },
      {
        id: 44,
        value: "Ledger_Report",
        label: "Ledger Report",
        action_array: [
          {
            id: 45,
            value: "Ledger_Report.Create",
            label: "Create",
          },
          {
            id: 46,
            value: "Ledger_Report.Read",
            label: "Read",
          },
          {
            id: 47,
            value: "Ledger_Report.Update",
            label: "Update",
          },
          {
            id: 48,
            value: "Ledger_Report.Delete",
            label: "Delete",
          },
        ],
      },
      {
        id: 49,
        value: "Voucher_Report",
        label: "Voucher Report",
        action_array: [
          {
            id: 50,
            value: "Voucher_Report.Create",
            label: "Create",
          },
          {
            id: 51,
            value: "Voucher_Report.Read",
            label: "Read",
          },
          {
            id: 52,
            value: "Voucher_Report.Update",
            label: "Update",
          },
          {
            id: 53,
            value: "Voucher_Report.Delete",
            label: "Delete",
          },
        ],
      },
    ],
  },
];

const getModulesArray = (parent: Parent) => {
  return (
    parent.master_array ||
    parent.transaction_array ||
    parent.reports_array ||
    []
  );
};

export default function App() {
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  // Handle individual permission change
  const handlePermissionChange = (
    parentLabel: string,
    moduleLabel: string,
    actionLabel: string,
    isChecked: boolean
  ) => {
    const permissionValue = `${parentLabel}.${moduleLabel}.${actionLabel}`;
    setSelectedPermissions((prev) =>
      isChecked
        ? [...prev, permissionValue]
        : prev.filter((perm) => perm !== permissionValue)
    );
  };

  // Handle "Check All" for a specific module (CRUD)
  const handleModuleCRUDCheckAllChange = (
    parentLabel: string,
    moduleLabel: string,
    isChecked: boolean
  ) => {
    const parent = permissionsData.find(
      (parent) => parent.label === parentLabel
    );
    const module = parent
      ? getModulesArray(parent).find(
          (mod: ModuleType) => mod.label === moduleLabel
        )
      : null;

    if (module) {
      const modulePermissions = module.action_array.map(
        (action: Action) => `${parentLabel}.${moduleLabel}.${action.label}`
      );

      setSelectedPermissions((prev) =>
        isChecked
          ? [
              ...prev,
              ...modulePermissions.filter(
                (perm: string) => !prev.includes(perm)
              ),
            ]
          : prev.filter(
              (perm: string) =>
                !perm.startsWith(`${parentLabel}.${moduleLabel}`)
            )
      );
    }
  };

  // Handle "Check All" for a specific Parent Module (Main Route)
  const handleParentCheckAllChange = (
    parentLabel: string,
    isChecked: boolean
  ) => {
    const parent = permissionsData.find((p) => p.label === parentLabel);
  
    if (parent) {
      const moduleArray = getModulesArray(parent);
      const parentPermissions = moduleArray.flatMap((module: ModuleType) =>
        module.action_array.map(
          (action: Action) => `${parentLabel}.${module.label}.${action.label}`
        )
      );
  
      setSelectedPermissions((prev) =>
        isChecked
          ? [
              ...prev,
              ...parentPermissions.filter((perm) => !prev.includes(perm)),
            ]
          : prev.filter((perm) => !perm.startsWith(`${parentLabel}.`))
      );
    }
  };
  

  // Handle "Check All" permissions globally
  const handleCheckAllChange = (isChecked: boolean) => {
    if (isChecked) {
      const allPermissions = permissionsData.flatMap((parent) => {
        const modules = [
          ...(parent.master_array || []),
          ...(parent.transaction_array || []),
          ...(parent.reports_array || []),
        ];

        return modules.flatMap((module) =>
          module.action_array.map((action) => ({
            parentLabel: parent.label,
            moduleLabel: module.label,
            actionLabel: action.label,
            value: `${parent.label}.${module.label}.${action.label}`,
          }))
        );
      });

      console.log("All Permissions:", allPermissions);
      setSelectedPermissions(allPermissions.map((p) => p.value));
    } else {
      setSelectedPermissions([]);
    }
  };

  // Helper functions to check if parent/module/overall permissions are selected
  const isParentChecked = (parentLabel: string) => {
    const parent = permissionsData.find((p) => p.label === parentLabel);
    if (!parent) return false;
    const moduleArray = getModulesArray(parent);
    const parentPermissions = moduleArray.flatMap((module: ModuleType) =>
      module.action_array.map(
        (action) => `${parentLabel}.${module.label}.${action.label}`
      )
    );
    return parentPermissions.every((perm: string) =>
      selectedPermissions.includes(perm)
    );
  };

  const isModuleChecked = (parentLabel: string, moduleLabel: string) => {
    const parent = permissionsData.find((p) => p.label === parentLabel);
    if (!parent) return false;
    const moduleArray = getModulesArray(parent);
    const module = moduleArray.find(
      (mod: ModuleType) => mod.label === moduleLabel
    );

    if (!module) return false;
    const modulePermissions = module.action_array.map(
      (action: Action) => `${parentLabel}.${moduleLabel}.${action.label}`
    );
    return modulePermissions.every((perm: string) =>
      selectedPermissions.includes(perm)
    );
  };

  const isCheckAllChecked = () => {
    const allPermissions = permissionsData.flatMap((parent) =>
      getModulesArray(parent).flatMap((module: ModuleType) =>
        module.action_array.map(
          (action) => `${parent.label}.${module.label}.${action.label}`
        )
      )
    );
    return allPermissions.every((perm: string) =>
      selectedPermissions.includes(perm)
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 space-y-6">
      {/* Top-Level Check All */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={isCheckAllChecked()}
            onCheckedChange={(isChecked) =>
              handleCheckAllChange(isChecked as boolean)
            }
          />
          <Label className="font-bold text-xl">Check All Permissions</Label>
        </div>
        <Button onClick={() => alert("All Permissions Saved!")}>
          Save Permissions
        </Button>
      </div>

      {permissionsData.map((parent) => (
        <div key={parent.id} className="space-y-4 bg-white p-4 rounded shadow">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isParentChecked(parent.label)}
              onCheckedChange={(isChecked) =>
                handleParentCheckAllChange(parent.label, isChecked as boolean)
              }
            />
            <Label className="font-bold text-lg">{parent.label}</Label>
          </div>

          {getModulesArray(parent).map((module: ModuleType) => (
            <div key={module.id} className="ml-6 space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={isModuleChecked(parent.label, module.label)}
                  onCheckedChange={(isChecked) =>
                    handleModuleCRUDCheckAllChange(
                      parent.label,
                      module.label,
                      isChecked as boolean
                    )
                  }
                />
                <Label className="font-medium">{module.label}</Label>
              </div>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Manage Permissions" />
                </SelectTrigger>
                <SelectContent>
                  {/* All CRUD */}
                  <div className="flex items-center space-x-2 px-2">
                    <Checkbox
                      checked={isModuleChecked(parent.label, module.label)}
                      onCheckedChange={(isChecked) =>
                        handleModuleCRUDCheckAllChange(
                          parent.label,
                          module.label,
                          isChecked as boolean
                        )
                      }
                    />
                    <Label>All (CRUD)</Label>
                  </div>

                  {module.action_array.map((action) => (
                    <div
                      key={action.id}
                      className="flex items-center space-x-2 px-2"
                    >
                      <Checkbox
                        checked={selectedPermissions.includes(
                          `${parent.label}.${module.label}.${action.label}`
                        )}
                        onCheckedChange={(isChecked) =>
                          handlePermissionChange(
                            parent.label,
                            module.label,
                            action.label,
                            isChecked as boolean
                          )
                        }
                      />
                      <Label>{action.label}</Label>
                    </div>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      ))}

      {/* Add this at the bottom, after the permissions mapping */}
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-bold mb-2">Selected Permissions:</h3>
        <div className="flex flex-wrap gap-2">
          {selectedPermissions.map((permission) => (
            <span
              key={permission}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
            >
              {permission}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
